var path = require('path');
var webpack = require('webpack');
var config = require('./config');
var debug = config.debug;
var plugins = [
  new webpack.DefinePlugin({
    __DEV__: debug
  }),
  new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
  ),
  new webpack.BannerPlugin('a collection of utils for web development'),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.NoErrorsPlugin()
];

if(!debug){
  console.log('开启压缩...');
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      test: /(\.js)$/,
      compress: {
        warnings: false
      }
    })
  );
}

var embedFileSize = 65536;

var config = {
  context: __dirname,
  entry: {
    index: './index.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js',
    library: '$w',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: plugins,
  devtool: '#source-map',
  module:{
    loaders:[
      { test: /\.png$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/png' },
      { test: /\.jpg$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg' },
      { test: /\.gif$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/gif' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!css!less' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.less'],
    modulesDirectories: ["node_modules", "bower_components"]
  }
};

module.exports = config;
