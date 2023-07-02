module.exports = class PageObject {
    constructor(browser, context) {
        this.browser = browser;
        this.context = context;
    }

    async initializePuppeteer() {
        this.puppeteer = await this.browser.getPuppeteer();
        const pages = await this.puppeteer.pages();
        this.page = pages[0];
    }

    async goTo(
        urlToGo = this.context.sutUri,
        selectorToWait = this.context.defaultSelector,
        timeout = this.context.defaultTimeout
    ) {
        await this.initializePuppeteer();
        await this.goToUrl(urlToGo);
        // await page.waitForSelector(selectorToWait, { timeout });

        const element = await this.browser.$(selectorToWait);
        await this.browser.waitUntil(() => element.isExisting(), { timeout });
        const { height } = await element.getSize();
        const { width } = await this.browser.getWindowSize();
        await this.page.setViewport({
            width: parseInt(width),
            height: parseInt(height),
        });

        return this.page;
    }

    async goToUrl(urlToGo) {
        const relativePathname = urlToGo.startsWith('/')
            ? urlToGo.slice(1)
            : urlToGo;
        const uriToGo = new URL(relativePathname, this.context.sutUri).href;
        await this.page.goto(uriToGo);
        await this.browser.url(uriToGo);
    }

    async takeScreenshot(
        screenshotName = 'plain',
        selector = this.context.defaultSelector
    ) {
        await this.browser.assertView(screenshotName, selector, {
            selectorToScroll: this.context.defaultSelector,
        });
    }
};
