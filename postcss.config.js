module.exports = {
  plugins: [
    require('tailwindcss'),
    require('./src/css/postcss-eliminate-ms-high-contrast.js'),
    require('./src/css/postcss-remove-all-vendor-prefixes.js'),
    require('autoprefixer')({
      // Avoid generating deprecated vendor prefixes
      overrideBrowserslist: [
        '>0.2%',
        'not dead',
        'not op_mini all',
        'not IE > 0'
      ]
    }),
  ]
}
