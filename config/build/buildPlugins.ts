import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions, BuildPath } from "./types/config";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

// Your existing buildPlugins function
export function buildPlugins(
  paths: BuildPath,
  options: BuildOptions,
  isDev: boolean,
  apiUrl: string,
  project: 'frontend' | 'storybook' | 'jest' = 'frontend'
): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: options.isDev ? "css/[name].css" : "css/[name].[contenthash:8].css",
      chunkFilename: options.isDev ? "css/[name].css" : "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
      'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
    }),
  ];

  if (isDev) {
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
    plugins.push(new ReactRefreshWebpackPlugin({
      overlay: false, // Disable overlay to prevent conflicts
    }));
  }

  return plugins;
}