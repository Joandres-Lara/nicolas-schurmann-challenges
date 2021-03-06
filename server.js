const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config");

const entry = process.argv[2];

const compiler = Webpack({
 ...webpackConfig,
 entry
});

const devServerOptions = Object.assign({}, webpackConfig.devServer, {
 open: true,
});

const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(8080, "127.0.0.1", () => {
 console.log("Starting server on http://localhost:8080");
});
