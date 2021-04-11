const path = require('path');

module.exports = {
 devtool: 'inline-source-map',

 mode: 'development',

 resolve: {
  modules: [
   'src',
   path.resolve(__dirname, './shared'),
   'node_modules'
  ],
  // https://webpack.js.org/configuration/resolve/#resolveextensions
  extensions: ['.js', '.jsx'],
  alias: {
   'components': path.resolve(__dirname, './shared/components'),
   'shared': path.resolve(__dirname, './shared')
  }
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
  contentBase: path.resolve(__dirname, './dist'),
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
