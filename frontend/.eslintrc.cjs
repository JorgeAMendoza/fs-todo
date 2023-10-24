/* eslint-disable no-undef */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'prettier'],
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],
      rules: {
        semi: ['error', 'never'],
        'no-console': 1,
      },
    },
  ],
}
