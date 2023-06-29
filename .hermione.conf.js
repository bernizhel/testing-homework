module.exports = {
    sets: {
        desktop: {
            files: 'test/hermione/desktop/**.hermione.js',
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
