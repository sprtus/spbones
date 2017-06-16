const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const PRODUCTION_MODE = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    app: [
      './resources/js/app.js',
      './resources/scss/app.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, '_catalogs/masterpage/bones/js'),
    filename: '[name].js'
  },
  devtool: PRODUCTION_MODE ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: !PRODUCTION_MODE
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !PRODUCTION_MODE
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: '../images/[name].[ext]'
        }
      },
      {
        test: /\.(svg(\?.+)?|eot(\?.+)?|ttf(\?.+)?|woff2?(\?.+)?)$/,
        loader: 'file-loader',
        options: {
          name: '../fonts/[name].[ext]'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/[name].css'),
    new webpack.LoaderOptionsPlugin({
      minimize: PRODUCTION_MODE
    })
  ]
}
