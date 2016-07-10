var path = require('path')
var webpack = require('webpack')

console.log(path.join(__dirname, 'public'));

module.exports = {
  // cheap-module-source-map - for production
  // cheap-module-eval-source-map - for development
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'index.js',
    publicPath: '/public'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(), // remove for production
    new webpack.NoErrorsPlugin()
    // Minifies/uglifies your code for production
    // new webpack.optimize.UglifyJsPlugin(),
    // Tells webpack to omit some things it uses for node environment builds
    // new webpack.DefinePlugin({
    //  'process.env': {
    //    'NODE_ENV': JSON.stringify('production')
    //  }
    // })
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ],
    loaders: [
      {
        loaders: ['react-hot', 'babel-loader'], // remove react-hot for production
        include: [
          path.resolve(__dirname, 'src')
        ],
        test: /\.js$/,
        plugins: ['transform-runtime'] // remove for production
      }
    ]
  }
}
