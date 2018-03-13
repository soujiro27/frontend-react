const path = require('path');


let moduleWorks = 'catalogos';

module.exports = {
  entry: {
    //"Acciones":['babel-polyfill', path.resolve(__dirname, 'src/entries/catalogos/acciones/acciones.js')],
    //"Caracteres":['babel-polyfill', path.resolve(__dirname, 'src/entries/catalogos/caracteres/caracteres.js')],
    //"subTipos":['babel-polyfill', path.resolve(__dirname, 'src/entries/catalogos/subTipos/subTipos.js')],
    //"Textos":['babel-polyfill', path.resolve(__dirname, 'src/entries/catalogos/textos/textos.js')],

    "subTipos":['babel-polyfill', path.resolve(__dirname, 'src/entries/catalogos/subTipos/create.js')],

  },
  output: {
    path: path.resolve(__dirname, '../public/'),
    filename: `js/${moduleWorks}/create/[name].js`
  },
  devServer: {
    port: 9000,
  },
  module: {
    rules: [
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'],
            plugins:['transform-async-to-generator']
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]',
          }
        }
      },
    ]
  }
}
