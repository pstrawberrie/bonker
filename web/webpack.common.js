/**
 * Shared Webpack Config
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

  entry: path.resolve(__dirname, 'public/js/app.js'),

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/dist')
  },

  module: {
    rules: [
      // Scripts
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
      // Styles
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { minimize: true || { discardComments: { removeAll: true } }}
          },
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },

  // Plugins
  // - configure optimizations in environment-specific configs, not here
  // - define environment variables here from 'site' JSON
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css',
    }),
    new CleanWebpackPlugin(['public/dist']),
    // new CopyWebpackPlugin([
    //   { from: './public/fonts', to: './fonts' },
    //   { from: './public/images', to: './images' }
    // ])
  ]

};