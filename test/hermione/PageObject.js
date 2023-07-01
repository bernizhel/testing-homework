module.exports = class PageObject {
    #browser = null;
    #context = null;

    constructor(browser, context) {
        this.#browser = browser;
        this.#context = context;
    }

    async goTo(
        urlToGo = this.#context.sutUri,
        selectorToWait = this.#context.defaultSelector,
        timeout = this.#context.defaultTimeout
    ) {
        const uriToGo = new URL(urlToGo.slice(1), this.#context.sutUri).href;
        await this.#browser.url(uriToGo);

        const element = await this.#browser.$(selectorToWait);
        await this.#browser.waitUntil(() => element.isExisting(), { timeout });
        const { height } = await element.getSize();
        const { width } = await this.#browser.getWindowSize();
        await this.#browser.setWindowSize(parseInt(width), parseInt(height));

        const puppeteer = await this.#browser.getPuppeteer();
        const [page] = await puppeteer.pages();
        await page.waitForSelector(selectorToWait, { timeout });
        return page;
    }

    async takeScreenshot(
        screenshotName = 'plain',
        selector = this.#context.defaultSelector
    ) {
        await this.#browser.assertView(screenshotName, selector);
    }
};
