module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
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
  },
};
