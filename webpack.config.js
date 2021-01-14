// Make path available
const path = require('path')

// Setup directories
const srcDir = path.resolve(__dirname, './src')
const distDir = path.resolve(__dirname, './dist')

// Detect production and development mode
const isDevelopment = process.env.NODE_ENV === 'development'

// Html Loader
const HtmlWebPackPlugin = require('html-webpack-plugin')

// Cleanup dist folder
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// Extract css into separate files
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Config object to export
module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: `${srcDir}/js/index.js`,
  output: {
    path: distDir,
    filename: isDevelopment ? 'bundle.js' : 'bundle.[contenthash].js' // https://github.com/webpack/loader-utils#interpolatename
    // publicPath: '/', // ?
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  optimization: {
    minimize: !isDevelopment // No need for uglifyjs here at the moment, later?
  },
  module: {
    rules: [
      // HTML
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: !isDevelopment
            }
          }
        ]
      },

      // File-Loader
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'assets'
        }
      },

      // Babel
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      // SCSS/SASS Modules
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          // separate css files - style-loader would inject css to the dom by <style> tags
          MiniCssExtractPlugin.loader,
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },

      // SCSS/SASS
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          // separate css files - style-loader would inject css to the dom by <style> tags
          MiniCssExtractPlugin.loader,
          // Interprets `@import` and `url()` like `import/require()` and will resolve them
          'css-loader',
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      }
    ]
  },

  // Init plugins
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[contenthash].css'
    })
  ],

  // DevServer settings
  devServer: {
    contentBase: distDir
  },
  devtool: isDevelopment ? 'inline-source-map' : 'none'
}
