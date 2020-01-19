module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/jsx-one-expression-per-line": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off"
  },
  settings: {
    "import/extensions": [
      ".js",
      ".tsx"
    ]
  }
};
