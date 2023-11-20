module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    rules: {
        'semi': ['error', 'always', { 'omitLastInOneLineBlock': false }],
        'comma-dangle': ['error', 'never'],
        quotes: ['error', 'single'],
        "indent": ["error", 4],
    }
};