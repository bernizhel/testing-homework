module.exports = {
    sets: {
        desktop: {
            files: 'test/hermione/desktop',
        },
    },
    browsers: {
        chrome: {
            automationProtocol: 'devtools',
            desiredCapabilities: {
                browserName: 'chrome',
            },
        },
    },
    plugins: {
        'hermione-headless-chrome': {
            enabled: true,
            browserId: 'chromium-browser',
            version: '114',
        },
        'html-reporter/hermione': {
            enabled: true,
        },
    },
};
