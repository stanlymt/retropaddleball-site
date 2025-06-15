/**
 * PostCSS plugin to remove all vendor prefixes
 */
module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-remove-all-vendor-prefixes',
    Declaration(decl) {
      // Check if property is a vendor prefix
      if (decl.prop.startsWith('-webkit-') || 
          decl.prop.startsWith('-moz-') || 
          decl.prop.startsWith('-ms-') || 
          decl.prop.startsWith('-o-')) {
        decl.remove();
      }
      
      // Check if value contains vendor prefixes
      if (decl.value.includes('-webkit-') || 
          decl.value.includes('-moz-') || 
          decl.value.includes('-ms-') || 
          decl.value.includes('-o-')) {
        // Try to extract the unprefixed value
        const unprefixedValue = decl.value
          .replace(/-webkit-[^,;)]+/g, '')
          .replace(/-moz-[^,;)]+/g, '')
          .replace(/-ms-[^,;)]+/g, '')
          .replace(/-o-[^,;)]+/g, '');
          
        // If we can salvage a non-empty value, use it, otherwise remove the declaration
        if (unprefixedValue.trim()) {
          decl.value = unprefixedValue;
        } else {
          decl.remove();
        }
      }
    }
  };
};

module.exports.postcss = true;
