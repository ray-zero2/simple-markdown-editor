// const webpack = require('webpack');
const path = require('path');
// const ESLintPlugin = require('eslint-webpack-plugin');

const optimizationConfig = require('./webpack_settings/optimization.js');
const babelLoaderSettings = require('./webpack_settings/loaderSettings/babel-loader.js');
const tsLoaderSettings = require('./webpack_settings/loaderSettings/ts-loader.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';

  return {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
      filename: '[name].bundle.js',
      publicPath: '/',
      path: path.join(__dirname, 'dist'),
    },
    devtool: isDev ? 'eval-cheap-module-source-map' : false,
    cache: {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
    },
    optimization: optimizationConfig(isDev),
    devServer: {
      static: {
        serveIndex: true,
        watch: true,
      },
      hot: true,
      open: true,
    },
    module: {
      rules: [
        // JavaScript
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [babelLoaderSettings(isDev)],
        },

        // TypeScript
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            babelLoaderSettings(isDev),
            {
              loader: '@linaria/webpack-loader',
              options: {
                sourceMap: isDev,
              },
            },
            tsLoaderSettings(isDev)
          ],
        },

        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: process.env.NODE_ENV !== 'production',
              },
            },
          ],
        },

        // vue
        {
          test: /\.vue$/,
          use: ['vue-loader'],
        },

        {
          test: /\.(glsl|vs|fs|vert|frag)$/,
          use: ['glslify-loader'],
          type: 'asset/source',
        },

        // images
        {
          test: /\.(png|jpg|gif|svg)$/,
          type: 'asset/inline', // url-loaderの代替
          // type: 'asset/resource', // file-loaderの代替
          // type: 'asset/source', // raw-loaderの代替
          // type: 'javascript/auto', // raw-loader, url-loader, file-loaderを使用する場合は必要
        },
      ],
    },

    resolve: {
      extensions: [
        '.js',
        '.ts',
        '.jsx',
        '.tsx',
        '.vue',
        '.glsl',
        '.vert',
        '.frag',
        '.vs',
        '.fs',
      ],
    },

    // target: ['web', 'es5'], // IE対応の場合必須

    plugins: [
      // // eslint-loaderは非推奨
      // // TODO: eslint-webpack-pluginとprettierの併用を調査
      // new ESLintPlugin(),
      new MiniCssExtractPlugin({
        filename: 'styles.css',
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
      }),
    ],
  };
};
