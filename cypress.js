module.exports = {
    env: {
        browser: true, // we are targeting browser environments
        es6: true, // we use es6
        node: true, // we use node
        'cypress/globals': true,
    },
    extends: [
        'plugin:cypress/recommended',
    ],
    plugins: [
        'eslint-plugin-cypress',
    ],
};
