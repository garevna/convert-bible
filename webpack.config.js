const path = require('path')
const webpack = require('webpack')

const dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env')
})

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': dotenv.parsed
    })
  ]
}
