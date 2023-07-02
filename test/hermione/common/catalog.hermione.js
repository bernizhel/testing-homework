const Catalog = require('../pageobjects/Catalog.js');

describe('Каталог', async () => {
    describe('В каталоге должны корректно отображаться названия продуктов', () => {
        it('Тест', async ({ browser }) => {
            const catalog = new Catalog(browser, hermione.ctx, false);
            await catalog.goTo();
            const name = await browser.$(
                '[data-testid="0"] [data-testid="product-name"]'
            );

            expect(name).toBeDefined();
            expect(await name.getText()).not.toEqual('');
        });
    });

    describe('Для каждого товара в каталоге отображается название, цена и ссылка на страницу с подробной информацией о товаре', () => {
        it('Продукт 111', async ({ browser }) => {
            const catalog = new Catalog(browser, hermione.ctx);
            await catalog.goTo();

            const product = await catalog.getProduct(111);

            expect(product).toBeDefined();
            await expect(product.$('[data-testid=product-name]')).toHaveText(
                'Good 1'
            );
            await expect(product.$('[data-testid=product-price]')).toHaveText(
                '$999'
            );
            const linkDetails = await product.$('[data-testid=link-details]');
            await expect(linkDetails).toHaveText('Details');
            await expect(linkDetails).toHaveHrefContaining('/catalog/111');

            await catalog.takeScreenshot('Продукт 111', '[data-testid="111"]');
        });

        it('Продукт 222', async ({ browser }) => {
            const catalog = new Catalog(browser, hermione.ctx);
            await catalog.goTo();

            const product = await catalog.getProduct(222);

            expect(product).toBeDefined();
            await expect(product.$('[data-testid=product-name]')).toHaveText(
                'Good 2'
            );
            await expect(product.$('[data-testid=product-price]')).toHaveText(
                '$888'
            );
            const linkDetails = await product.$('[data-testid=link-details]');
            await expect(linkDetails).toHaveText('Details');
            await expect(linkDetails).toHaveHrefContaining('/catalog/222');

            await catalog.takeScreenshot('Продукт 222', '[data-testid="222"]');
        });

        it('Продукт 333', async ({ browser }) => {
            const catalog = new Catalog(browser, hermione.ctx);
            await catalog.goTo();

            const product = await catalog.getProduct(333);

            expect(product).toBeDefined();
            await expect(product.$('[data-testid=product-name]')).toHaveText(
                'Good 3'
            );
            await expect(product.$('[data-testid=product-price]')).toHaveText(
                '$777'
            );
            const linkDetails = await product.$('[data-testid=link-details]');
            await expect(linkDetails).toHaveText('Details');
            await expect(linkDetails).toHaveHrefContaining('/catalog/333');

            await catalog.takeScreenshot('Продукт 333', '[data-testid="333"]');
        });
    });
});
