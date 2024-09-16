module.exports = {
    extends: [
      'react-app',
      'react-app/jest',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      // Add custom rules here
    },
  };