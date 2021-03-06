module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    // 'prettier/react',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
  ],
};
