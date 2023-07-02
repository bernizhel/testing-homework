module.exports = {
    verbose: true,
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleDirectories: ['node_modules', 'src', 'test'],
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
};
