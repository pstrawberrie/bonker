/**
 * Shared Webpack Config
 */
if(process.env.NODE_ENV === undefined) process.env.NODE_ENV = 'development';
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

  entry: './src/index.js',

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      // Scripts
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
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
      filename: 'app.css'
    }),
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: './src/public/fonts', to: './fonts' },
      { from: './src/public/images', to: './images' },
      { from: './src/index.html', to: './' }
    ])
  ]

};