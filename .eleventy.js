/** .eleventy.js  — CommonJS syntax **/
module.exports = function (eleventyConfig) {
  /* ── 1. YOUR OWN DATE FILTER ────────────────────────── */
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

  /* ── 2. Passthrough assets, dirs, etc. ──────────────── */
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");
  eleventyConfig.addPassthroughCopy("src/manifest.json");
  
  /* ── 3. Watch for changes in assets during development ── */
  eleventyConfig.addWatchTarget("src/assets/");

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
