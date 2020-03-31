module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  globals: {
    cy: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'react/no-array-index-key': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',  // used babel-plugin-typescript-to-proptypes
    '@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'never' }],
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'spaced-comment': 'off',
    'no-unused-vars': 'off', // used @typescript-eslint/no-unused-vars
    'prettier/prettier': 'error',
    "react/jsx-props-no-spreading": ['error', {
      "custom": "ignore",
  }]
  },
  settings: {
    'import/extensions': ['.js', '.tsx']
  }
};
