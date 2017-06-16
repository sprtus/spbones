const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PRODUCTION_MODE = process.env.NODE_ENV === 'production'

module.exports = {

  /**
   * Webpack entry points: add files to this array if you'd like them to be
   * compiled and copied to the build folder using the modules in this
   * configuration file
   */
  entry: {
    app: [
      './resources/js/app.js',
      './resources/scss/app.scss'
    ]
  },

  /**
   * Webpack output configuration: be sure to update this path if you decide to
   * rename your theme directory
   */
  output: {
    path: path.resolve(__dirname, '_catalogs/masterpage/bones/js'),
    filename: '[name].js'
  },

  /**
   * Use source-map to create source maps during development builds
   */
  devtool: PRODUCTION_MODE ? false : 'source-map',

  /**
   * Webpack module configuration
   */
  module: {
    rules: [

      /**
       * Compile Sass stylesheets to CSS isomg sass-loader and css-loader
       */
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

      /**
       * Copy font files to the build folder using file-loader; by default,
       * fonts must be within a folder named "fonts" to be properly recognized
       * by the test regular expression
       */
      {
        test: /fonts\/.*\.(eot|ttf|woff2?|svg)([\?#].*)?$/,
        loader: 'file-loader',
        options: {
          name: '../fonts/[name].[ext]'
        }
      },

      /**
       * Copy images to the build folder using file-loader
       */
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/,
        exclude: /fonts\//,
        loader: 'file-loader',
        options: {
          name: '../images/[name].[ext]'
        }
      },

      /**
       * Compile ES6 to JavaScript in the build folder using babel-loader
       */
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

  /**
   * Additional configuration of Webpack plugins
   */
  plugins: [

    /**
     * Default output path for compiled CSS files
     */
    new ExtractTextPlugin('../css/[name].css'),

    /**
     * Minimize files when building in production mode
     */
    new webpack.LoaderOptionsPlugin({
      minimize: PRODUCTION_MODE
    })

  ]

}
