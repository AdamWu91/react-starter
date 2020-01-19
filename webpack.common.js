const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const aliases = {
  '@actions': resolve(__dirname, './src/actions/'),
  '@api': resolve(__dirname, './src/api/'),
  '@components': resolve(__dirname, './src/components/'),
  '@reducers': resolve(__dirname, './src/reducers/'),
  '@selectors': resolve(__dirname, './src/selectors/'),
  '@store': resolve(__dirname, './src/store/'),
  '@utils': resolve(__dirname, './src/utils/'),
};
module.exports = {
  entry: {
    app: resolve(__dirname, './src/index.tsx'),
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: { ...aliases },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],

};
