const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: "/public/assets"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      // we may be able to move these declarations to a package.json if that's desirable
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
  }
}
