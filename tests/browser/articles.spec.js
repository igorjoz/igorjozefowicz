import { test, expect } from '@playwright/test';

for (const locale of ['pl', 'en']) {
    test(`${locale}: publication dates and article schema follow Inertia navigation`, async ({ page }, testInfo) => {
        await page.route(/googletagmanager\.com|google-analytics\.com/, route => route.abort());
        await page.goto(`/${locale}/articles`);
        await page.locator('.menu-toggle').waitFor({ state: 'attached' });
        await page.evaluate(() => { window.__articleDocument = true; });
        const items = page.locator('.article-list-item');
        await expect(items).toHaveCount(2);
        await expect(items.first().locator('time')).toHaveAttribute('datetime', '2026-10-15');
        await expect(items.last().locator('time')).toHaveAttribute('datetime', '2026-10-08');
        await items.first().locator('a').click();
        await expect(page).toHaveURL(new RegExp(`/${locale}/articles/business-system-integrations$`));
        await expect(page.locator('.page-hero time')).toHaveAttribute('datetime', '2026-10-15');
        const schema = page.locator('head script[type="application/ld+json"]');
        await expect(schema).toHaveCount(1);
        expect(JSON.parse(await schema.textContent())).toMatchObject({ '@type': 'BlogPosting', inLanguage: locale, datePublished: '2026-10-15' });
        expect(JSON.parse(await schema.textContent())).not.toHaveProperty('dateModified');
        await page.setViewportSize({ width: 360, height: 768 });
        await page.screenshot({ path: testInfo.outputPath('article-mobile.png') });
        expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);
        await page.locator('a.site-brand').click();
        await expect(schema).toHaveCount(0);
        await page.locator(`#articles a[href="/${locale}/articles/custom-application"]`).click();
        await expect(schema).toHaveCount(1);
        expect(JSON.parse(await schema.textContent())).toMatchObject({ datePublished: '2026-10-08' });
        expect(await page.evaluate(() => window.__articleDocument)).toBe(true);
        const other = locale === 'pl' ? 'en' : 'pl';
        await page.locator(`.language-switch a[lang="${other}"]`).click();
        await expect(page).toHaveURL(new RegExp(`/${other}/articles/custom-application$`));
        await expect.poll(async () => JSON.parse(await schema.textContent()).inLanguage).toBe(other);
    });
}

test('article dates and schema are readable without JavaScript', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto('/pl/articles/business-system-integrations');
    await expect(page.locator('.page-hero time')).toHaveText('15 października 2026');
    await expect(page.locator('article h2')).not.toHaveCount(0);
    const schema = JSON.parse(await page.locator('head script[type="application/ld+json"]').textContent());
    expect(schema.datePublished).toBe('2026-10-15');
    await context.close();
});
