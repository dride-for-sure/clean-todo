// Detect production and development mode
const isDevelopment = process.env.NODE_ENV === 'development';

// Html Loader
const HtmlWebPackPlugin = require('html-webpack-plugin');

// Cleanup dist folder
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/app.js'],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    // filename: 'bundle.[hash].js',
  },
  module: {
    rules: [
      // // HTML loader
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false },
          },
        ],
      },
      // Babel loader
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader', // add this before sass-loader
          'sass-loader',
        ],
      },
      // {
      //   test: /\.s(a|c)ss$/,
      //   exclude: /\.module.(s(a|c)ss)$/,
      //   loader: [
      //     isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: isDevelopment,
      //       },
      //     },
      //   ],
      // },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
};
