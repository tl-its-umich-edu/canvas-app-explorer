const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const publicPath = 'https://958ba9a1711d.ngrok.io/dist/'
//const publicPath = config.output.publicPath

const options = {
  publicPath: publicPath,
  port: 3000,
  hot: true,
  inline: true,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  disableHostCheck: true
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(3000, '0.0.0.0', () => {
  console.log('dev server listening on port 3000');
});
