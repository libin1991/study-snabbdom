const path = require('path')

module.exports = {
  // 入口文件
  entry: './src/index.js',
  // 出口文件
  output: {
    // publicPath: path.resolve(__dirname, 'dist'),
    publicPath: 'xuni',
    filename: 'bundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: 'www'
  }
}