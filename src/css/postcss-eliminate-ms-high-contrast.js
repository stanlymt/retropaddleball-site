/**
 * Advanced PostCSS plugin to completely remove all instances of -ms-high-contrast
 */
module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-eliminate-ms-high-contrast',
    Once(root) {
      // First pass: Remove any media queries with -ms-high-contrast
      root.walkAtRules('media', (rule) => {
        if (rule.params.includes('-ms-high-contrast')) {
          rule.remove();
        }
      });
      
      // Second pass: Remove any direct property references
      root.walkDecls(decl => {
        if (decl.prop.includes('-ms-high-contrast') || decl.value.includes('-ms-high-contrast')) {
          decl.remove();
        }
      });
      
      // Third pass: Add forced-colors media query as a replacement
      root.append(`
        @media (forced-colors: active) {
          a, button, input, select, textarea, [role="button"] {
            forced-color-adjust: none;
          }
        }
      `);
    }
  };
};

module.exports.postcss = true;
