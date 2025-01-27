module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.ignoreWarnings = [
          (warning) =>
            warning.message.includes(
              "Failed to parse source map from"
            ),
        ];
        return webpackConfig;
      },
    },
  };
  