const path = require("path");

module.exports = {
  stories: [
    "../src/**/*.story.@(js|mdx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.push({
      test: /\.less$/,
      loaders: [
        "style-loader",
        "css-loader",
        {
          loader: "less-loader",
          // Antd 样式需要开启
          options: { javascriptEnabled: true },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    config.module.rules.push({
      test: /\.(js|mjs|jsx)$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      options: {
        plugins: [["import", { libraryName: "antd", style: true }]],
      },
    });

    return config;
  },
};
