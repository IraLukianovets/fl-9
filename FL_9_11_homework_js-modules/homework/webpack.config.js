const path = require('path');
const htmlWebpack = require('html-webpack-plugin');
const extractText = require("extract-text-webpack-plugin");
const uglifyJs = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/js/test-output.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: { loader: 'css-loader', options: { minimize: true } }
        })
      }
    ]
  },
  plugins: [
    new extractText('styles.css'),
    new htmlWebpack({template: './src/index.html'}),
    new uglifyJs({ uglifyOptions: { output: { comments: false } } })
  ]
};