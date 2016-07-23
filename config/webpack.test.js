/**
 * Configuration de webpack pour l'environnement de production
 */

module.exports = {

  devtool: 'inline-source-map',

  // Explique à webpack comment charger les modules dont l'extension n'est pas
  // précisée. Ici, il charge en premier le fichier correspondant à l'extension
  // précisée (''), puis les .js, puis les .ts
  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
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
        // Pas besoin de charger les images ni les polices pour tester le JS
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null'
      },
      {
        // Pas non plus besoin de charger les CSS
        test: /\.css$/,
        loader: 'null'
      }
    ]
  }
}
