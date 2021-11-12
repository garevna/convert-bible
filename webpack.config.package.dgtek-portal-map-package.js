const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/dgtekMap.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dgtek-portal-map-package.js',
    library: {
      name: 'dgtek-portal-map-package',
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
