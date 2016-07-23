/**
 * Configuration de webpack commune à tous les environnements
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {

  // Points d'entrée de l'application
  // Les fichiers principaux dans lesquels webpack va rechercher les dépendances
  // utilisés par l'application
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  // Explique à webpack comment charger les modules dont l'extension n'est pas
  // précisée. Ici, il charge en premier le fichier correspondant à l'extension
  // précisée (''), puis les .js, puis les .ts
  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {

    // Les loaders sont chargés d'interpréter les fichiers quand webpack va les
    // charger. Par exemple, les fichiers en .ts seront interprétés par le
    // module 'angular2-template-loader' qui va se charger d'inclure les modules
    // d'angular nécessaire pour qu'angular puisse utiliser des templates puis
    // par le module 'ts' qui permet de compiler du TypeScript en Javascript
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        // Loader pour les CSS contenus dans des fichiers
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        // Loader pour les CSS contenus directement dans le HTML
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  },

  plugins: [
    // Plugin permettant d'éviter que webpack inclue plusieurs fois un module
    // qui serait importer à plusieurs endroits de l'application. Si app à une
    // dépendance commune avec vendor, webpack va la supprimer de app et
    // l'inclure simplement dans vendor. Même système entre vendor et polyfills
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    // Injecte les fichiers JS et CSS dans le HTML sans qu'on ait à le faire à
    // la main via les balises HTML classiques
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]

};
