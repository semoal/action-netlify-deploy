module.exports = {
  plugins: ['import', 'jest', '@typescript-eslint', 'prettier'],
  extends: [
    'plugin:github/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    camelcase: 'off',
    'i18n-text/no-en': 'off',
    '@typescript-eslint/no-explicit-any': "off",
    'import/no-namespace': 'off',
  },
  env: {
    es6: true,
    node: true,
  },
  globals: {
    __APP_VERSION__: true,
    NodeJS: true,
    cy: true,
  },
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    ecmaVersion: 11,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
};
