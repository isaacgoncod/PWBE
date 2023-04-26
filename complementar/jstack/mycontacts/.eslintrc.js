module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'object-curly-newline': 'off',
    'comma-dangle': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
