module.exports = {
    env: {
        es6: true,
        'cypress/globals': true,
    },
    env: {
        browser: true, // we are targeting browser environments
        es6: true, // we use es6
        node: true, // we use node
    },
    extends: [
        'plugin:cypress/recommended',
    ],
    plugins: [
        'eslint-plugin-cypress',
    ],
};
