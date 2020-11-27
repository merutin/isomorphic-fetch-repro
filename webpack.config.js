const path = require('path');
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: './src/modules/index.js',
  resolve: {
    extensions: ['.mjs', '.json', '.ts', '.js'],
    symlinks: false,
    cacheWithContext: false,
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  module: {
  },
  plugins: [
  ],
  stats: {
    errorDetails: true
  }
};
