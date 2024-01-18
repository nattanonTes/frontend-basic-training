const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'dist'),
  },
};