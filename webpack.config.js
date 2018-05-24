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
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader", options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader", options: {
            sourceMap: true
          }
        }]
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
    modules: [
      "node_modules"
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
}
