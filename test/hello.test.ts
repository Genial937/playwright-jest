import { chromium } from 'playwright'
jest.setTimeout(35 * 1000)
describe('Launch Browser', () => {
    test('Open letcode', async () => {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('http://localhost:3000/');
        await page.getByRole('heading', { name: 'Hello world!' }).click();
        await browser.close();
    })
})