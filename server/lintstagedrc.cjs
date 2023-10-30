module.exports = {
  '*.{js,ts}': 'eslint --cache --fix',
  '*.{ts}': () => 'npm run check:types',
}
