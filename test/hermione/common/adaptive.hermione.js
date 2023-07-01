const PageObject = require('../PageObject.js');

describe('Верстка должна адаптироваться под ширину экрана', async () => {
    it('Главная страница', async ({ browser }) => {
        const pageObject = new PageObject(browser, hermione.ctx);
        await pageObject.goTo('/');
        await pageObject.takeScreenshot();
    });

    it('Каталог', async ({ browser }) => {
        const pageObject = new PageObject(browser, hermione.ctx);
        await pageObject.goTo('/catalog');
        await pageObject.takeScreenshot();
    });

    it('Доставка', async ({ browser }) => {
        const pageObject = new PageObject(browser, hermione.ctx);
        await pageObject.goTo('/delivery');
        await pageObject.takeScreenshot();
    });

    it('Контакты', async ({ browser }) => {
        const pageObject = new PageObject(browser, hermione.ctx);
        await pageObject.goTo('/contacts');
        await pageObject.takeScreenshot();
    });

    it('Корзина', async ({ browser }) => {
        const pageObject = new PageObject(browser, hermione.ctx);
        await pageObject.goTo('/cart');
        await pageObject.takeScreenshot();
    });
});
