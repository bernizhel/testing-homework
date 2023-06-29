const { SUT_URI, TIMEOUT } = require('../constant');

async function beforeEach(browser) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto(SUT_URI);
    await page.waitForSelector({ timeout: TIMEOUT });
    return page;
}

describe('Верстка должна адаптироваться под ширину экрана', async () => {
    it('Страница товаров', async ({ browser }) => {
        const page = beforeEach(browser);
        await browser.assertView('plain', '.Application');
    });
});
