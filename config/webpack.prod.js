/**
 * Configuration de webpack pour l'environnement de production
 */

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

// Constante définie plus bas en temps que variable d'environnement
// Grace à cela on peut utiliser angular en mode production :
// if (process.env.ENV === 'production') {
//   enableProdMode();
// }
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  // Configuration des fichiers de sortie
  output: {
    // Les fichiers générés par webpack sont placés dans le dossier dist
    path: helpers.root('dist'),
    // Le plugin HtmlWebpackPlugin utilise ces variables pour générer les liens
    // vers les ressources qu'il inclus. Les fichiers générés ont désormais un
    // hash dans leur nom pour éviter le cache
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  htmlLoader: {
    minimize: false // workaround for ng2
  },

  plugins: [
    // Plugin arrêtant la compilation en cas d'erreur
    new webpack.NoErrorsPlugin(),
    // Détecte les fichiers identiques (ou presque) et les retire des fichiers
    // de sortie
    new webpack.optimize.DedupePlugin(),
    // Minifie les fichiers JS
    new webpack.optimize.UglifyJsPlugin(),
    // Plugin générant des fichiers CSS (avec un hash dans le nom) pour le CSS
    // inclus directement dans les fichiers JS
    new ExtractTextPlugin('[name].[hash].css'),
    // Définit des variables d'environnement utilisées au sein de l'application
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
});
