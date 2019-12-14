const { resolve } = require('path');

const INCLUDE = resolve(__dirname, 'src');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: __dirname + '/build',
    library: '',
    libraryTarget: 'commonjs',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      { test: /\.(tsx|ts)$/i, use: ['ts-loader'], include: INCLUDE },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        include: INCLUDE,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
            },
          }
        ],
      },
    ],
  },

  externals: {
    react: 'react',
  },
};
