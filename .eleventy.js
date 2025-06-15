/** .eleventy.js  — CommonJS syntax **/
const fs = require('fs/promises');
const path = require('path');
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  /* ── 1. Add 11ty plugins ──────────────────────────── */
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  /* ── 2. YOUR OWN DATE FILTER ────────────────────────── */
  eleventyConfig.addFilter("date", (value = "now", format = "yyyy") => {
    const dt = value === "now" ? new Date() : new Date(value);

    // Only need the year? return dt.getFullYear()
    if (format === "yyyy") return dt.getFullYear();

    // Minimal formatter — extend to your needs
    return dt.toLocaleDateString("en-US", {
      year:  "numeric",
      month: "short",
      day:   "numeric",
    });
  });

  /* ── 3. Passthrough CSS files ──────────────────────── */
  // We're building CSS separately with the build:css script
  eleventyConfig.addPassthroughCopy("_site/css");

  /* ── 4. Passthrough assets, dirs, etc. ──────────────── */
  // Use more specific patterns for assets to avoid duplication
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/assets/css": "assets/css" });
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");
  eleventyConfig.addPassthroughCopy("src/.htaccess");
  eleventyConfig.addPassthroughCopy("src/manifest.json");
  eleventyConfig.addPassthroughCopy("src/service-worker.js");
  
  /* ── 5. Watch for changes in assets during development ── */
  eleventyConfig.addWatchTarget("src/assets/");
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("tailwind.config.js");
  
  /* ── 6. Add HTML minification for production ── */
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    // Only process .html files in production
    if(process.env.NODE_ENV === "production" && outputPath && outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
        removeAttributeQuotes: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true
      });
    }
    return content;
  });

  return {
    dir: {
      input:    "src",
      includes: "layouts",
      output:   "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
