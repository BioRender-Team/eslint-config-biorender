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
        'no-exclusive-tests': 'error',
        'no-pending-tests': 'error',
        'no-skipped-tests': 'error',
        'handle-done-callback': 'error',
        'no-synchronous-tests': 'error',
        'no-global-tests': 'error',
        'no-return-and-callback': 'error',
        'valid-test-description': 'error',
        'valid-suite-description': 'error',
        'no-mocha-arrows': 'error',
        'no-hooks': 'error',
        'no-hooks-for-single-case': 'error',
        'no-sibling-hooks': 'error',
        'no-top-level-hooks': 'error',
        'no-identical-title': 'error',
        'max-top-level-suites': 'error',
        'no-nested-tests': 'error',
        'no-setup-in-describe': 'error',
        'prefer-arrow-callback': 'error',
        'no-async-describe': 'error',
    },
};
