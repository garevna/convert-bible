const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/convert.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'parse-bible-text-to-json.js',
    library: {
      name: 'parse-bible-text-to-json',
      type: 'umd'
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  }
}
