const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addBase }) {
  // Override any Tailwind styles that use -ms-high-contrast
  addBase({
    '@media (forced-colors: active)': {
      'a, button': {
        'forced-color-adjust': 'none',
      },
      '.prose a': {
        'forced-color-adjust': 'none',
      }
    }
  });
}, {
  // This is a no-op plugin that just provides an override
  corePlugins: {
    preflight: false, // Disable preflight to avoid any default -ms-high-contrast styles
  }
});
