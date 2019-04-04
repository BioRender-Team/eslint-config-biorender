module.exports = {
    env: {
        node: true, // we use node
        mocha: true, // we use mocha
    },
    plugins: [
        'mocha',
    ],
    rules: {
        'mocha/no-exclusive-tests': 'error',
        'mocha/no-pending-tests': 'error',
        'mocha/no-skipped-tests': 'error',
        'mocha/handle-done-callback': 'error',
        'mocha/no-synchronous-tests': 'error',
        'mocha/no-global-tests': 'error',
        'mocha/no-return-and-callback': 'error',
        'mocha/valid-test-description': 'error',
        'mocha/valid-suite-description': 'error',
        'mocha/no-mocha-arrows': 'error',
        'mocha/no-hooks': 'off',
        'mocha/no-hooks-for-single-case': 'off',
        'mocha/no-sibling-hooks': 'error',
        'mocha/no-top-level-hooks': 'error',
        'mocha/no-identical-title': 'error',
        'mocha/max-top-level-suites': 'error',
        'mocha/no-nested-tests': 'error',
        'mocha/no-setup-in-describe': 'error',
        'mocha/prefer-arrow-callback': 'error',
        'mocha/no-async-describe': 'error',
    },
};
