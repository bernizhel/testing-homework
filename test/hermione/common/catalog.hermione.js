const Catalog = require('../pageobjects/Catalog.js');

describe('Каталог', async () => {
    describe('В каталоге должны корректно отображаться названия продуктов', () => {
        it('Тест', async ({ browser }) => {
            const catalog = new Catalog(browser, hermione.ctx, false);
            await catalog.goTo();
            const name = await browser.$('[data-testid="product-name-0"]');

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
            await expect(
                product.$('[data-testid="product-name-111"]')
            ).toHaveText('Good 1');
            await expect(
                product.$('[data-testid="product-price-111"]')
            ).toHaveText('$999');
            const linkDetails = await product.$(
                '[data-testid="link-details-111"]'
            );
            await expect(linkDetails).toHaveText('Details');
            await expect(linkDetails).toHaveHrefContaining('/catalog/111');

            await catalog.takeScreenshot('Продукт 111', '[data-testid="111"]');
        });

        it('Продукт 222', async ({ browser }) => {
            const catalog = new Catalog(browser, hermione.ctx);
            await catalog.goTo();

            const product = await catalog.getProduct(222);

            expect(product).toBeDefined();
            await expect(
                product.$('[data-testid="product-name-222"]')
            ).toHaveText('Good 2');
            await expect(
                product.$('[data-testid="product-price-222"]')
            ).toHaveText('$888');
            const linkDetails = await product.$(
                '[data-testid="link-details-222"]'
            );
            await expect(linkDetails).toHaveText('Details');
            await expect(linkDetails).toHaveHrefContaining('/catalog/222');

            await catalog.takeScreenshot('Продукт 222', '[data-testid="222"]');
        });

        it('Продукт 333', async ({ browser }) => {
            const catalog = new Catalog(browser, hermione.ctx);
            await catalog.goTo();

            const product = await catalog.getProduct(333);

            expect(product).toBeDefined();
            await expect(
                product.$('[data-testid="product-name-333"]')
            ).toHaveText('Good 3');
            await expect(
                product.$('[data-testid="product-price-333"]')
            ).toHaveText('$777');
            const linkDetails = await product.$(
                '[data-testid="link-details-333"]'
            );
            await expect(linkDetails).toHaveText('Details');
            await expect(linkDetails).toHaveHrefContaining('/catalog/333');

            await catalog.takeScreenshot('Продукт 333', '[data-testid="333"]');
        });
    });
});
