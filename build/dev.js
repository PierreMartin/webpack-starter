var webpack             = require('webpack');
var config              = require('./webpack.dev');
var webpackDevServer    = require('webpack-dev-server');
var chokidar            = require('chokidar');
const port = 8080;

// config.entry.app.unshift("webpack-dev-server/client?http://localhost:" + port + "/", "webpack/hot/dev-server");

var compiler            = webpack(config);
var hotMiddleware       = require('webpack-hot-middleware')(compiler);

chokidar.watch('./*.html').on('all', function(path) {
    // console.log('Le fichier ' + path + ' à changé');
    hotMiddleware.publish({action: 'reload'})
});

var server = new webpackDevServer(compiler, {
    hot: true,
    contentBase: './',
    quiet: false,
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: { colors: true }
});

// webpack-hot-middleware :
server.use(hotMiddleware);

server.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("j'écoute sur le port " + port);
    }

});