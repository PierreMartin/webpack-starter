var webpack = require('webpack');
var conf    = require('./webpack.prod.js');
var ora     = require('ora');
var spinner = ora('Chargement...');
require('shelljs/global');                  // permet d'avoir des commandes du terminal dans nodeJS

spinner.start();
rm('-rf', 'dist');                          // permet de supprimer tout le fichier 'dist' avant de le rebuilder


webpack(conf, function(err, stats) {
    spinner.stop();
    if (err) throw err;

    /* On afficher les "stats" dans le terminal */
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
});
