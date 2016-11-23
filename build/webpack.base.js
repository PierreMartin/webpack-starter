var path                = require('path');
var root                = path.resolve(__dirname, '../');
/*
var ExtractTextPlugin   = require("extract-text-webpack-plugin");
var ExtractCSS          = new ExtractTextPlugin('bundle.css');          // permet de créer un fichier "bundle.css"
var webpack             = require('webpack');
*/

module.exports = {
    entry: {
        app: ['./src/main.css', './src/main.js']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'        // hot reload
    },

    /** Les loaders **/
    module: {
        preLoaders: [
            // ES LINT :
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /(node_modules|bower_components)/
            }
        ],
        loaders: [
            // CSS :
            {
                test: /\.css$/,
                loaders: ['style', 'css']
                // loader: ExtractCSS.extract('css')
            },

            // ES6 :
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                include: root    // on appel le fichier ".babelrc" ici
            },

            // URLS / IMAGES :
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name]-[hash:7].[ext]'
                }
            }
        ]
    },

    /** Les plugins **/
    plugins: [

    ],

    /** Autres configs **/
    // ES LINT :
    eslint: {
        configFile: path.resolve(root, './.eslintrc'),      // on appel le fichier '.eslintrc' qui permet de configurer le lint js
        formatter: require('eslint-friendly-formatter')
    }
};


