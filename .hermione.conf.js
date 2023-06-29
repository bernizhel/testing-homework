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
        'html-reporter/hermione': {
            enabled: true,
        },
    },
};
