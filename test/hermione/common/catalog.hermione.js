const Catalog = require('../pageobjects/Catalog.js');

describe('Каталог', async () => {
    it('Для каждого товара в каталоге отображается название, цена и ссылка на страницу с подробной информацией о товаре', async ({
        browser,
    }) => {
        const catalog = new Catalog(browser, hermione.ctx);
        await catalog.goTo();

        const product = await catalog.getProduct(0);

        expect(product).toBeDefined();
        await expect(product.$('[data-testid=product-name]')).toBeDisplayed();
        await expect(product.$('[data-testid=product-price]')).toBeDisplayed();
        await expect(product.$('[data-testid=link-details]')).toHaveText(
            'Details'
        );

        await catalog.takeScreenshot('Продукт 0', '[data-testid="0"]');
    });
});
