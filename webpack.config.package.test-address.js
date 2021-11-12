const path = require('path')

module.exports = {
  entry: './src/dgtekMap.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dgtek-map.js',
    library: {
      name: 'DgtekMap',
      type: 'umd'
    }
  }
}
