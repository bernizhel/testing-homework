const { SUT_URI, TIMEOUT } = require('../constant');

describe('Верстка должна адаптироваться под ширину экрана', async () => {
    beforeEach(async ({ browser }) => {
        const puppeteer = await browser.getPuppeteer();
        const [page] = await puppeteer.pages();
        await page.goto(SUT_URI);
        await page.waitForSelector({ timeout: TIMEOUT });
    });

    it('Страница товаров', async ({ browser }) => {
        await browser.assertView('plain', '.Application');
    });
});
