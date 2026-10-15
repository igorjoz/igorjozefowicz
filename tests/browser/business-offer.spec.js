import { test, expect } from '@playwright/test';

for (const locale of ['pl', 'en']) {
    test(`${locale}: business offer leads to integration details and direct contact`, async ({ page }, testInfo) => {
        await page.route(/googletagmanager\.com|google-analytics\.com/, route => route.abort());
        await page.setViewportSize({ width: 1366, height: 768 });
        await page.goto(`/${locale}`);
        await page.locator('.menu-toggle').waitFor({ state: 'attached' });
        await expect(page.locator('#audience .business-card')).toHaveCount(3);
        await expect(page.locator('#problems dl')).toHaveCount(3);
        await expect(page.locator('#offerings .business-card')).toHaveCount(3);
        await expect(page.locator('.project-scene')).toHaveCount(2);
        await expect(page.locator('#larynxai a')).toHaveAttribute('href', `/${locale}/projects/larynxai`);
        const ids = await page.locator('main section[id]').evaluateAll(sections => sections.map(section => section.id));
        expect(ids.indexOf('audience')).toBeLessThan(ids.indexOf('problems'));
        expect(ids.indexOf('offerings')).toBeLessThan(ids.indexOf('vento'));
        expect(ids.indexOf('forcen')).toBeLessThan(ids.indexOf('collaboration'));
        await page.locator('#problems').screenshot({ path: testInfo.outputPath('business-problems.png') });
        await page.locator('#offerings').screenshot({ path: testInfo.outputPath('service-choices.png') });
        await page.evaluate(() => { window.__businessVisit = true; });
        await page.locator(`#offerings a[href="/${locale}/services/custom-applications#automation-details"]`).click();
        await expect(page).toHaveURL(new RegExp(`/${locale}/services/custom-applications#automation-details$`));
        await expect(page.locator('#automation-details')).toBeInViewport();
        expect(await page.evaluate(() => window.__businessVisit)).toBe(true);
        await expect(page.locator(`main a[href="/${locale}/services/custom-applications"]`)).toHaveCount(0);
        await expect(page.locator('#related-project a')).toHaveAttribute('href', `/${locale}/projects/vento`);
        await expect(page.locator('#contact .contact-prompts li')).toHaveCount(4);
        await expect(page.locator('#contact .contact-email')).toHaveAttribute('href', 'mailto:igor@jozefowicz.pl');
        await page.screenshot({ path: testInfo.outputPath('application-service.png'), fullPage: true });
    });
}
