module.exports = {
    env: {
        node: true, // we use node
        'jest/globals': true,
    },
    plugins: [
        'jest',
    ],
    rules: {
        'jest/expect-expect': 'error',
        'jest/no-commented-out-tests': 'error',
        'jest/no-disabled-tests': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-mocks-import': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/no-test-callback': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/valid-describe': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'error',
    },
};
