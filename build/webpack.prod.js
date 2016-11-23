var config              = require('./webpack.base');
var webpack             = require('webpack');
var ExtractTextPlugin   = require("extract-text-webpack-plugin");
var ExtractCSS          = new ExtractTextPlugin('bundle.css');          // permet de créer un fichier "bundle.css"

config.plugins = config.plugins.concat([
    // require CSS :
    ExtractCSS,

    // Uglify (JS + CSS) :
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
]);

var cssLoaders = config.module.loaders[0].loaders;
config.module.loaders[0].loaders = null;
config.module.loaders[0].loader = ExtractCSS.extract(cssLoaders.slice(1, 10)); // ExtractCSS.extract()   on veux que le css sois bundler dans un fichier a part ("bundle.css")


module.exports = config;