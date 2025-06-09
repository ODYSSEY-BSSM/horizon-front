module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:unused-imports/recommended',
    'prettier',
  ],
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unused-imports': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
