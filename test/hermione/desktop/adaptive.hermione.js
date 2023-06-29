const { SUT_URI } = require('./constant');

describe('Верстка должна адаптироваться под ширину экрана', async function () {
    it('Страница товаров', async ({ browser }) => {
        const puppeteer = await browser.getPuppeteer();
        const [page] = await puppeteer.pages();
        await page.goto(SUT_URI);
        await page.waitForSelector({ timeout: 5000 });
        await browser.assertView('plain', 'html');
    });
});
