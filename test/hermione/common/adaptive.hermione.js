const PageObject = require('../PageObject.js');

describe('Верстка должна адаптироваться под ширину экрана', async () => {
    it('Главная страница', async ({ browser }) => {
        const page = new PageObject(browser, hermione.ctx);
        await page.goTo('/');
        await page.takeScreenshot();
    });

    it('Каталог', async ({ browser }) => {
        const page = new PageObject(browser, hermione.ctx);
        await page.goTo('/catalog');
        await page.takeScreenshot();
    });

    it('Доставка', async ({ browser }) => {
        const page = new PageObject(browser, hermione.ctx);
        await page.goTo('/delivery');
        await page.takeScreenshot();
    });

    it('Контакты', async ({ browser }) => {
        const page = new PageObject(browser, hermione.ctx);
        await page.goTo('/contacts');
        await page.takeScreenshot();
    });

    it('Корзина', async ({ browser }) => {
        const page = new PageObject(browser, hermione.ctx);
        await page.goTo('/cart');
        await page.takeScreenshot();
    });
});
