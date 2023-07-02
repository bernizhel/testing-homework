const os = require('node:os');

// will be changed by the pageobject
const RESOLUTIONS = [
    {
        width: 1920,
        height: 1080,
        isMobile: false,
    },
    {
        width: 1024,
        height: 720,
        isMobile: false,
    },
    {
        width: 575,
        height: 720,
        isMobile: true,
    },
    {
        width: 320,
        height: 480,
        isMobile: true,
    },
];

const SUT_URI = 'http://localhost:3000/hw/store/';
const DEFAULT_TIMEOUT = 5000;
const DEFAULT_SELECTOR = '.Application';

module.exports = {
    browsers: {
        ...getConfigurationObject(getBrowserOptions),
    },
    sets: {
        ...getConfigurationObject(getTestSet),
    },
    system: {
        fileExtensions: ['.js'],
        // use any number of workers your machine allows
        parallelLimit: os.cpus().length,
        workers: os.cpus().length,
        testsPerWorker: 1,
        ctx: {
            sutUri: SUT_URI,
            defaultTimeout: DEFAULT_TIMEOUT,
            defaultSelector: DEFAULT_SELECTOR,
        },
    },
    plugins: {
        'html-reporter/hermione': {
            enabled: true,
        },
    },
};

function getConfigurationObject(fn, array = RESOLUTIONS) {
    return array.map(fn).reduce((obj, next) => Object.assign(obj, next), {});
}

function getTestSet({ width }) {
    return {
        [width]: {
            files: [
                'test/hermione/common/**/*.hermione.js',
                `test/hermione/${width}/**/*.hermione.js`,
            ],
            browsers: [`chrome:${width}`],
        },
    };
}

function getBrowserOptions({ height, width, isMobile }) {
    return {
        [`chrome:${width}`]: {
            automationProtocol: 'devtools',
            desiredCapabilities: {
                browserName: 'chrome',
                version: '114',
            },
            windowSize: {
                width,
                height,
            },
            sessionEnvFlags: {
                isChrome: true,
                isMobile,
            },
            httpTimeout: DEFAULT_TIMEOUT,
            retry: 2,
            resetCursor: true,
            calibrate: true,
            compositeImage: false,
            screenshotDelay: 500,
            screenshotsDir: 'hermione/screens',
            screenshotMode: 'fullpage',
            takeScreenshotOnFailsMode: 'fullpage',
            takeScreenshotOnFailsTimeout: DEFAULT_TIMEOUT,
            assertViewOpts: {
                allowViewportOverflow: true,
                captureElementFromTop: true,
                selectorToScroll: DEFAULT_SELECTOR,
            },
            // baseUrl: 'http://localhost:3000/hw/store/',
            // transformRequest: null,
        },
    };
}
