const path = require('path');

module.exports = {
 devtool: 'inline-source-map',

 entry: './src/index.js',

 mode: 'development',

 resolve: {
  modules: [
   path.resolve(__dirname, '../src'),
   'node_modules'
  ],
  // https://webpack.js.org/configuration/resolve/#resolveextensions
  extensions: ['.js', '.jsx']
 },

 output: {
  filename: 'bundle.js',
  path: path.resolve('./dist')
 },

 /**
  * Loaders para los archivos
  *
  */
 module: {
  rules: [{
   test: /\.(js|jsx)/,
   exclude: /node_modules/,
   use: {
    loader: 'babel-loader'
   }
  }]
 },

 devServer: {
  disableHostCheck: true,
  contentBase: path.resolve('./dist'),
  compress: true,
  liveReload: true,
  // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
  historyApiFallback: {
   rewrites: [
    {from: /./, to: '/index.html' },
   ]
  }
 }
}
