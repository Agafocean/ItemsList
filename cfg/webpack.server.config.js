const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { DefinePlugin } = require('webpack');
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.css/;
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  target: 'node',
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.[tj]sx?$/,
      use: ['ts-loader']
    },
    {
      test: /\.css$/,
      use: [{
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'local',
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
          onlyLocals: true
        }
      }
      ],
      exclude: GLOBAL_CSS_REGEXP
    },
    {
      test: GLOBAL_CSS_REGEXP,
      use: ['css-loader']
    },
    {
      test: /\.(?:|gif|png|jpg|jpeg|svg)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'static/img/[name].[ext]'
        }
      }]
    }
    ]
  },
  optimization: { minimize: false },
  devtool: isDev ? 'eval' : false,
  plugins: [new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` })]
};