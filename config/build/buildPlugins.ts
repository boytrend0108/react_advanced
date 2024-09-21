import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions, BuildPath } from "./types/config";

// Your existing buildPlugins function
export function buildPlugins(paths: BuildPath, options: BuildOptions, isDev: boolean): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: options.isDev ? "css/[name].css" : "css/[name].[contenthash:8].css",
      chunkFilename: options.isDev ? "css/[name].css" : "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    })
  ];
}