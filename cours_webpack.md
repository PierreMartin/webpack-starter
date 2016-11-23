###################################### WEBPACK ######################################
- il à un serveur de développement
- autoload js
- utilisable avec grunt/gulp / nodeJs

$ sudo npm i -g webpack

# 1) pour compiler - command line :
$ webpack src/main.js dist/bundle.js
// fichier d'entré    fichier de sortie


# 2) pour compiler - fichier de config :
A la racine :  webpack.config.js
$ webpack



###### LOADERS - transpiller l'es6 ######
$ sudo npm init
$ sudo npm i -D webpack babel-loader babel-core babel-preset-es2015 babel-preset-stage-2


###### LOADERS - require des CSS ######
$ sudo npm i -D css-loader style-loader


###### PLUGINS - extract text webpack (pour importer des fichiers css) ######
$ sudo npm i -D extract-text-webpack-plugin


###### PLUGINS - uglify JS/CSS (deja inclue dans webpack) ######
1) var webpack = require('webpack');
2) new webpack.optimize.uglifyJsPlugin({  OPTIONS  })




###### AUTOLOAD ######
- lancer un serveur de développement

$ sudo npm i -g webpack-dev-server
$ webpack-dev-server --content-base ./
$ webpack-dev-server --hot --inline --content-base ./

localhost:8080


###### URL (images) ######
webpack ne sais pas gerer les url
$ sudo npm i -D url-loader file-loader




#################################### WEBPACK - config de build ##########################################
1) créer "/build/build.js"
2) dans package.json :  "scripts": {
                           "build": "node build/build.js"
                         },

3) $ npm run build

### shelljs (permet d'avoir des commandes du terminal dans nodeJS)
$ sudo npm i -D shelljs


### ora (permet d'afficher la progression au moment du build)
$ sudo npm i -D ora
Puis charger ora dans 'build.js' :

var ora     = require('ora');
var spinner = ora('Chargement...');
spinner.start();
spinner.stop();


#################################### WEBPACK - config de dev ####################################
43:40 
- https://webpack.github.io/docs/webpack-dev-server.html

créer 'dev.js'
$ sudo npm i -D webpack-dev-server

$ npm run dev



#################################### Aller plus loin ####################################
50:00

# resolve (pour charger des fichiers (require('') | import from '') SANS leur extensions) :
dans 'webpack.base.js' :

resolve: {
    extensions: ['', '.js', '.css']
}




# preLoaders (loaders qui vont s'executer avant les loaders general)
- exemple avec eslint :
$ sudo npm i -D eslint eslint-loader eslint-config-standard eslint-plugin-promise eslint-plugin-standard
$ sudo npm i -D eslint-friendly-formatter



#################################### webpack-hot-middleware ####################################
https://github.com/glenjamin/webpack-hot-middleware

58:00
hot reload pour recharger des pages selon certaines action demandé, et donc sur du HTML

$ sudo npm i -D webpack-hot-middleware
$ sudo npm i -D chokidar                // permet d'ecouter des changement dans les fichiers


