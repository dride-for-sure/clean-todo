module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 'off',
    'prettier/prettier': ['error'],
  },
};
