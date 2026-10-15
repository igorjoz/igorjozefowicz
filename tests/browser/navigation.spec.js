import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.route(/googletagmanager\.com|google-analytics\.com/, route => route.abort());
});

test('portfolio links update React without replacing the document or animated shell', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await page.setViewportSize({ width: 1366, height: 768 });
    await page.goto('/pl');
    await page.locator('.menu-toggle').waitFor({ state: 'attached' });
    await page.evaluate(() => {
        window.__navigationMarker = 'same-document';
        window.__shell = document.querySelector('.studio-site');
        window.__light = window.__shell.getAnimations({ subtree: true }).find(animation => animation.animationName === 'studio-lights-drift');
        window.__events = [];
        window.gtag = (...args) => window.__events.push(args);
    });
    expect(await page.evaluate(() => Boolean(window.__light))).toBe(true);
    const documents = [];
    const inertia = [];
    page.on('request', request => {
        if (request.resourceType() === 'document' && request.frame() === page.mainFrame()) documents.push(request.url());
        if (request.headers()['x-inertia'] === 'true') inertia.push(new URL(request.url()).pathname);
    });
    const visit = async (selector, pathname) => {
        const response = page.waitForResponse(response => new URL(response.url()).pathname === pathname && response.request().headers()['x-inertia'] === 'true');
        await page.locator(selector).click();
        expect((await response).headers()['x-inertia']).toBe('true');
        await expect(page).toHaveURL(new RegExp(`${pathname}$`));
        await expect.poll(() => page.evaluate(() => document.activeElement?.id)).toBe('main');
        expect(await page.evaluate(() => window.__navigationMarker)).toBe('same-document');
        expect(await page.evaluate(() => window.__shell === document.querySelector('.studio-site'))).toBe(true);
        expect(await page.evaluate(() => window.__light === window.__shell.getAnimations({ subtree: true }).find(animation => animation.animationName === 'studio-lights-drift'))).toBe(true);
    };
    await visit('#studio-navigation a[href="/pl/projects"]', '/pl/projects');
    expect(await page.evaluate(() => window.__events.filter(event => event[1] === 'content_view' && event[2].page_path === '/pl/projects').length)).toBe(1);
    await visit('.project-copy h3 a[href="/pl/projects/forcen"]', '/pl/projects/forcen');
    await expect(page.locator('h1')).toHaveText('Forcen');
    await visit('.page-hero a[href="/pl/projects"]', '/pl/projects');
    await visit('#studio-navigation a[href="/pl/articles"]', '/pl/articles');
    await visit('.editorial-links a[href="/pl/articles/custom-application"]', '/pl/articles/custom-application');
    await visit('.site-article a[href="/pl/services/custom-applications"]', '/pl/services/custom-applications');
    await visit('.language-switch a[lang="en"]', '/en/services/custom-applications');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('#studio-navigation a[href="/en/services"]')).toHaveAttribute('aria-current', 'page');
    await expect(page).toHaveTitle('Custom applications | Igor Józefowicz');
    await expect(page.locator('head link[rel="canonical"]')).toHaveCount(1);
    await expect(page.locator('head link[rel="canonical"]')).toHaveAttribute('href', /\/en\/services\/custom-applications$/);
    await expect(page.locator('head link[hreflang="pl"]')).toHaveAttribute('href', /\/pl\/services\/custom-applications$/);
    await expect(page.locator('head meta[name="description"]')).toHaveCount(1);
    await expect(page.locator('head meta[property="og:locale"]')).toHaveAttribute('content', 'en_GB');
    await visit('#studio-navigation a[href="/en/contact"]', '/en/contact');
    await page.locator('.contact-email').evaluate(link => link.addEventListener('click', event => event.preventDefault(), { once: true }));
    await page.locator('.contact-email').click();
    expect(await page.evaluate(() => window.__events.filter(event => event[1] === 'contact_click').length)).toBe(1);
    await visit('a.site-brand', '/en');
    const count = inertia.length;
    await page.locator('.hero-copy a[href="#contact"]').click();
    await expect(page).toHaveURL(/\/en#contact$/);
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(500);
    expect(inertia.length).toBe(count);
    expect(documents).toEqual([]);
    expect(inertia).toContain('/en/services/custom-applications');
});

test('history restores scrolling and regular visits reset it without refocusing history', async ({ page }) => {
    await page.goto('/pl/projects');
    await page.locator('.menu-toggle').waitFor({ state: 'attached' });
    await page.evaluate(() => document.fonts.ready);
    const projectLink = page.locator('.project-copy h3 a[href="/pl/projects/forcen"]');
    await projectLink.scrollIntoViewIfNeeded();
    const previousScroll = await page.evaluate(() => { window.__historyMarker = true; return window.scrollY; });
    expect(previousScroll).toBeGreaterThan(100);
    // Inertia persists native scroll events after a short debounce.
    await expect.poll(() => page.evaluate(() => window.history.state?.documentScrollPosition?.top)).toBe(previousScroll);
    await projectLink.click();
    await expect(page).toHaveURL(/\/pl\/projects\/forcen$/);
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
    await expect.poll(() => page.evaluate(() => document.activeElement?.id)).toBe('main');
    await page.evaluate(() => {
        const main = document.querySelector('#main');
        const original = main.focus.bind(main);
        window.__focusCalls = 0;
        main.focus = (...args) => { window.__focusCalls++; original(...args); };
    });
    await page.goBack();
    await expect(page).toHaveURL(/\/pl\/projects$/);
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(previousScroll);
    expect(await page.evaluate(() => window.__focusCalls)).toBe(0);
    await page.goForward();
    await expect(page).toHaveURL(/\/pl\/projects\/forcen$/);
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
    expect(await page.evaluate(() => window.__historyMarker)).toBe(true);
});

test('mobile menu closes on navigation and the language changes dynamically', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/pl');
    await page.locator('.menu-toggle').click();
    await page.evaluate(() => { window.__mobileMarker = true; });
    await page.locator('#studio-navigation a[href="/pl/projects"]').click();
    await expect(page).toHaveURL(/\/pl\/projects$/);
    await expect(page.locator('.menu-toggle')).toHaveAttribute('aria-expanded', 'false');
    await page.locator('.language-switch a[lang="en"]').click();
    await expect(page).toHaveURL(/\/en\/projects$/);
    await expect(page.locator('h1')).toHaveText('Projects');
    expect(await page.evaluate(() => window.__mobileMarker)).toBe(true);
});

test('modified clicks open a native new tab and external links stay native', async ({ page, context }) => {
    await page.goto('/pl');
    await page.locator('.menu-toggle').waitFor({ state: 'attached' });
    const tabPromise = context.waitForEvent('page');
    await page.locator('.hero-copy a[href="/pl/projects"]').click({ modifiers: ['ControlOrMeta'] });
    const tab = await tabPromise;
    await tab.waitForLoadState();
    await expect(tab).toHaveURL(/\/pl\/projects$/);
    await expect(page).toHaveURL(/\/pl$/);
    await tab.close();
    await page.goto('/pl/about');
    // Cancel only at the document after the component has processed the event.
    await page.evaluate(() => document.addEventListener('click', event => {
        if (event.target.closest('a')?.href === 'https://github.com/igorjoz') {
            window.__externalPrevented = event.defaultPrevented;
            event.preventDefault();
        }
    }, { once: true }));
    await page.locator('.about-copy .site-links a[href="https://github.com/igorjoz"]').click();
    await expect(page).toHaveURL(/\/pl\/about$/);
    expect(await page.evaluate(() => window.__externalPrevented)).toBe(false);
});
