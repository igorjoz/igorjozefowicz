import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests/browser',
    outputDir: './test-results',
    workers: 2,
    reporter: 'list',
    use: {
        baseURL: process.env.PORTFOLIO_BASE_URL || 'http://localhost:8080',
        browserName: 'chromium',
        reducedMotion: 'reduce',
        screenshot: 'only-on-failure',
    },
});
