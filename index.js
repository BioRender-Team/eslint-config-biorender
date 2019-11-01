module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/babel",
        "prettier/react",
    ],
    plugins: [
        'prettier',
    ],
};
