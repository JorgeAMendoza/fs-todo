module.exports = {
  '*.{js,jsx,ts,tsx}': 'eslint --cache --fix',
  '*.css': 'stylelint --cache --fix',
  '*.{ts,tsx}': () => 'npm run check:types',
  '*.{jsx,ts,tsx,css,scss}': 'prettier --write',
}
