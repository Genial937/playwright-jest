import { chromium } from 'playwright'

jest.setTimeout(35 * 1000)
describe('Launch Browser', () => {
    test('Open letcode', async () => {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://storybook.dev.zippie.com/');
        await browser.close();
    })
})