const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/startWorker.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'start-worker.js',
    library: {
      name: 'start-worker',
      type: 'umd'
    }
  }
}
