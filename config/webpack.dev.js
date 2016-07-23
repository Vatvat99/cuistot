/**
 * Configuration de webpack pour l'environnement de développement
 */

var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {

  devtool: 'cheap-module-eval-source-map',

  // Configuration des fichiers de sortie
  output: {
    // Les fichiers générés par webpack sont placés dans le dossier dist.
    // Virtuellement en fait, car webpack ne génère pas de fichiers lors du
    // développement, il sont en mémoire
    path: helpers.root('dist'),
    // URL de l'appli (nécessaire au fonctionnement du Hot Module Replacement)
    publicPath: 'http://localhost:3000/',
    // Le plugin HtmlWebpackPlugin utilise ces variables pour générer les liens
    // vers les ressources qu'il inclus
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    // Plugin générant des fichiers CSS pour le CSS inclus directement dans les
    // fichiers JS
    new ExtractTextPlugin('[name].css')
  ],

  // Configuration du serveur inclus dans webpack et utilisé simplement pendant
  // le développement
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }

});
