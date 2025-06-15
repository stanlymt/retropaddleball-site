/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,md,njk}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('./src/css/remove-ms-high-contrast.js')
  ],
  future: {
    // Disable deprecated features
    disableColorOpacityUtilitiesByDefault: true,
    respectDefaultRingColorOpacity: true,
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  corePlugins: {
    preflight: true, // We still want preflight, but our plugin will override problem styles
  },
  // Optimize Tailwind for production
  mode: 'jit', // Enable JIT mode for faster builds and better purging
  safelist: [], // Define classes that should not be purged (if any)
}
