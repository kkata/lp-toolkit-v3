const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  // ref. https://www.11ty.dev/docs/config/#transforms-example-minify-html-output
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  // Return your Object options:
  return {
    dir: {
      input: "src/template",
      output: "src",

      // ⚠️ This value is relative to your input directory.
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
