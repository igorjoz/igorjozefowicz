import { test, expect } from '@playwright/test';

const widths = [360, 390, 768, 1024, 1366, 1920];
const paths = ['', '/projects', '/projects/forcen', '/services', '/services/custom-applications', '/services/ai-integrations', '/about', '/articles', '/articles/custom-application', '/articles/business-system-integrations', '/contact'];

async function checkText(page) {
    return page.locator('.studio-site').evaluate(root => {
        const problems = [];
        const descriptions = '.about-copy > p, .hero-intro, .project-copy > p:not(.site-eyebrow), .project-contribution p, .studio-section > p:not(.site-eyebrow), .studio-section li, .contact-note, .business-card p, .business-card dd, .contact-prompts li, .site-article p, .site-article li';
        for (const element of root.querySelectorAll('*')) {
            const hasText = [...element.childNodes].some(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
            if (!hasText || !element.getClientRects().length) continue;
            const style = getComputedStyle(element);
            if (style.visibility !== 'visible') continue;
            const minimum = element.matches(descriptions) ? 16 : 14;
            if (parseFloat(style.fontSize) < minimum) problems.push({ text: element.textContent.slice(0, 75), fontSize: style.fontSize, minimum });
        }
        return problems;
    });
}

for (const locale of ['pl', 'en']) {
    for (const width of widths) {
        test(`${locale}: readable text and reflow at ${width}px`, async ({ page }, testInfo) => {
            await page.setViewportSize({ width, height: 768 });
            await page.route(/googletagmanager\.com|google-analytics\.com/, route => route.abort());
            const removedAssets = [];
            page.on('request', request => { if (/sculpture|three(?:[/.\-]|$)/i.test(request.url())) removedAssets.push(request.url()); });
            for (const path of paths) {
                await page.goto(`/${locale}${path}`);
                await page.locator('.menu-toggle').waitFor({ state: 'attached' });
                await page.evaluate(() => document.fonts.ready);
                expect(await checkText(page), path || 'home').toEqual([]);
                expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), path || 'home').toBe(false);
                const portrait = page.locator('.about-portrait img');
                await expect(portrait).toHaveCount(!path || path === '/about' ? 1 : 0);
                if (!path || path === '/about') {
                    await expect(portrait).toHaveAttribute('loading', 'lazy');
                    await expect(portrait).toHaveAttribute('srcset', /320w.*640w.*960w/);
                    const before = await page.locator('.about-portrait').boundingBox();
                    await portrait.scrollIntoViewIfNeeded();
                    await expect(portrait).toHaveJSProperty('complete', true);
                    expect(await portrait.evaluate(image => image.naturalWidth)).toBeGreaterThan(0);
                    const after = await page.locator('.about-portrait').boundingBox();
                    expect(Math.abs(before.height - after.height)).toBeLessThan(1);
                    if (width <= 800) {
                        const heading = await page.locator('.about-heading').boundingBox();
                        const copy = await page.locator('.about-copy').boundingBox();
                        expect(heading.y + heading.height).toBeLessThanOrEqual(after.y);
                        expect(after.y + after.height).toBeLessThanOrEqual(copy.y);
                    }
                    await page.locator('#about').screenshot({ path: testInfo.outputPath(path ? 'about-page.png' : 'about-home.png') });
                }
                if (!path) {
                    await expect(page.locator('.site-brand-logo')).toHaveAttribute('src', '/images/logo-igorjoz.svg');
                    await expect(page.locator('.site-footer > span')).toHaveText(locale === 'pl' ? 'Kod, dane i ciekawość.' : 'Code, data and curiosity.');
                    await page.evaluate(() => window.scrollTo({ top: 400, behavior: 'instant' }));
                    expect((await page.locator('.site-header').boundingBox()).y).toBeLessThan(0);
                    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
                    await expect(page.locator('.studio-hero h1')).toHaveText(locale === 'pl' ? 'Aplikacje i automatyzacje dla rozwijających się firm' : 'Business applications and automation for growing companies');
                    await expect(page.locator('.studio-hero .hero-mark, .studio-hero img, .hero-baseline')).toHaveCount(0);
                    await expect(page.locator('.hero-copy .site-button')).toHaveAttribute('href', '#contact');
                    await expect(page.locator('.hero-copy .text-link')).toHaveAttribute('href', `/${locale}/projects`);
                    if (width >= 1366) {
                        const actions = await page.locator('.hero-copy .site-actions').boundingBox();
                        expect(actions.y + actions.height).toBeLessThanOrEqual(768);
                    }
                    if (width <= 1100) {
                        await page.locator('.menu-toggle').click();
                        await expect(page.locator('#studio-navigation')).toBeVisible();
                        await page.keyboard.press('Escape');
                        await expect(page.locator('.menu-toggle')).toHaveAttribute('aria-expanded', 'false');
                    }
                    await page.screenshot({ path: testInfo.outputPath('home.png') });
                }
            }
            expect(removedAssets).toEqual([]);
        });
    }
}

test('server HTML retains the portrait and mobile navigation without JavaScript', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    await page.goto('/pl');
    await expect(page.locator('.hero-mark')).toHaveCount(0);
    await expect(page.locator('#about img')).toHaveAttribute('src', '/images/igor-portrait-640.webp');
    await page.locator('.server-mobile-menu summary').click();
    await expect(page.locator('.server-mobile-menu nav')).toBeVisible();
    expect(await checkText(page)).toEqual([]);
    await expect(page.locator('.project-scene')).toHaveCount(2);
    await page.locator('.server-mobile-menu a[href="/pl/projects"]').click();
    await expect(page).toHaveURL(/\/pl\/projects$/);
    await expect(page.locator('h1')).toHaveText('Realizacje');
    await context.close();
});

test('layout reflows at the equivalent of 200% zoom on a 1440px display', async ({ page }) => {
    await page.setViewportSize({ width: 720, height: 450 });
    for (const locale of ['pl', 'en']) {
        await page.goto(`/${locale}`);
        expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);
        expect(await checkText(page)).toEqual([]);
    }
});
