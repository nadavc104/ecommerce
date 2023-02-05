const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  plugins: [
    new HTMLWebpackPlugin({
        template: './public/index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
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
            use:[
              {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: ''}
              },
              'css-loader', 'postcss-loader', 'sass-loader', 
            ],

        },
        {
          test: /\.(jpeg|png|jpg|svg|gif)$/i,
          type: 'asset',
        }
    ]
  }
}