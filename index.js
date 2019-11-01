module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        '@typescript-eslint/eslint-recommended',
        '@typescript-eslint/recommended',
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/babel",
        "prettier/react",
    ],
    plugins: [
        'prettier',
    ],
};
