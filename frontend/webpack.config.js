const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
        template: './public/index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  devtool: 'source-map',
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },
        {
            test: /\.(s[ac]|c)ss$/i,
            use:[MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
    ]
  }
}