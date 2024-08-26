import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index.ts'),

  output: {
    filename: '[name].[contenthash].js', // contenthash - add suffix to the  file.name
    path: path.resolve(__dirname, 'dist'),
    clean: true, //delete old files
  },

  plugins: [
    // add index.html to dist folder
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpack.ProgressPlugin(), // show bundling progress
  ],

  module: {
    // rules configure loaders (loaker hanlde not js file (.ts, .png etc))
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // allow import without extantions (.. from './index')
  },
};

export default config;
