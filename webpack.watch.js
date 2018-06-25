const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const spawn = require('child_process').spawn;

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'development',
  output: {
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
              importLoaders: 1
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    {
      apply: (compiler) => {
        compiler.hooks.afterEnvironment.tap('patternLabStart', (compilation) => {
          const child = spawn('php', ['core/console','--server','--with-watch','--patternsonly']);
          child.stdout.on('data', function (data) {
            process.stdout.write(data);
          });
          child.stderr.on('data', function (data) {
            process.stderr.write(data);
          });
        });
      }
    }
  ],
  watch: true
});
