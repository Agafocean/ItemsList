const path = require('path');
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const GLOBAL_CSS_REGEXP = /\.global\.css/;
const DEV_PLUGINS = [new CleanWebpackPlugin(), new HotModuleReplacementPlugin()];
const COMMON_PLUGINS = [new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` })];

function setupDevtool() {
  if (isDev) return 'eval';
  if (isProd) return false;
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'react-dom': isDev ? '@hot-loader/react-dom' : 'react-dom'
    }
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: [path.resolve(__dirname, '../src/client/client.jsx'),
    'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',
  ],
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js',
    publicPath: 'static',
  },
  devtool: setupDevtool(),
  module: {
    rules: [{
      test: /\.[tj]sx?$/,
      use: ['ts-loader']
    },
    {
      test: /\.css$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          esModule: false,
          modules: {
            mode: 'local',
            localIdentName: '[name]__[local]--[hash:base64:5]',
          }
        }
      }
      ],
      exclude: GLOBAL_CSS_REGEXP
    },
    {
      test: GLOBAL_CSS_REGEXP,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(?:|gif|png|jpg|jpeg|svg)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: '/img/[name].[ext]'
        }
      }]
    }
    ]
  },
  plugins: isDev ? DEV_PLUGINS.concat(COMMON_PLUGINS) : COMMON_PLUGINS
};