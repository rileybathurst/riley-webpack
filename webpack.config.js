const path = require('path');
// const autoprefixer = require('autoprefixer'); // currently pulled out

module.exports = {
  entry: ['./src/app.js', './src/app.scss', './src/index.html'], // , './index.html'
  output: {
    filename: 'bundle.js',
    // path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css', // this is refeerenced in the index.html and other content files so Im guessing its pretty needed
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          // this was currently killing npm so I need to understand more about why I need it or if it was part of google material
            /* {
            loader: 'postcss-loader',
            options: {
                plugins: () => [autoprefixer()]
            }
          }, */
          {
            loader: 'sass-loader'
          },
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        /* use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ] // presets
          } // options
        } // use */
      }, // test
/*       {
        test: /\.html$/i,
        // loader: 'html-loader',
        // use: ['file-loader?name=[name].[ext]', 'extract-loader', 'html-loader'],
        use: 'raw-loader',
      }, */
      {
        test: /\.(png|svg|jpg|gif|html)$/,
        use: [
          'file-loader'
        ]
      }
    ], // rules
  }, // module
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    hot: true,
  },
} // module.export