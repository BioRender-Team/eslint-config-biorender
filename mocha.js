module.exports = {
    env: {
        node: true, // we use node
        mocha: true, // we use mocha
    },
    plugins: [
        'mocha',
    ],
    rules: {
        "mocha/no-exclusive-tests": "error",
    },
};
