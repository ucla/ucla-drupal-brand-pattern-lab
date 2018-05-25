const webpack = require('webpack');
const path = require('path');

const live = process.env.NODE_ENV === 'production';

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: live? 'production' : 'development',
  context: path.resolve(__dirname, 'src'),
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: "/public/assets",
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    // well if we follow patternlab's file structure, we need this to simplify import resolution
    modules: [
      "node_modules",
      "src/sass/_patterns/00-atoms/01-global",
      "src/sass/_patterns/00-atoms/02-text",
      "src/sass/_patterns/00-atoms/03-lists",
      "src/sass/_patterns/00-atoms/04-images",
      "src/sass/_patterns/00-atoms/05-forms",
      "src/sass/_patterns/00-atoms/06-buttons",
      "src/sass/_patterns/00-atoms/07-tables",
      "src/sass/_patterns/00-atoms/08-media",
      "src/sass/_patterns/01-molecules/00-text",
      "src/sass/_patterns/01-molecules/01-layout",
      "src/sass/_patterns/01-molecules/02-blocks",
      "src/sass/_patterns/01-molecules/03-media",
      "src/sass/_patterns/01-molecules/04-forms",
      "src/sass/_patterns/01-molecules/05-navigation",
      "src/sass/_patterns/01-molecules/06-components",
      "src/sass/_patterns/01-molecules/07-messaging",
      "src/sass/_patterns/02-organisms/00-global",
      "src/sass/_patterns/02-organisms/01-article",
      "src/sass/_patterns/02-organisms/02-comments",
      "src/sass/_patterns/02-organisms/03-sections",
      "src/sass/_patterns/02-organisms/03-sections",
      "src/sass/_patterns/03-templates/00-layouts",
      "src/sass/_patterns/04-pages"
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}
