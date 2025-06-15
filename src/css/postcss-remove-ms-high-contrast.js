/**
 * PostCSS plugin to remove -ms-high-contrast media queries
 */
module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-remove-ms-high-contrast',
    AtRule: {
      media: (atRule) => {
        // Check if this is a -ms-high-contrast media query
        if (atRule.params.includes('-ms-high-contrast')) {
          // Remove the entire rule
          atRule.remove();
        }
      }
    }
  };
};

module.exports.postcss = true;
