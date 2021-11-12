const path = require('path')

console.log(path.resolve(__dirname, '../dist'))

module.exports = {
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'map.worker.js'
  }
}
