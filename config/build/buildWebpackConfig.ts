import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";




export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js', // contenthash - add suffix to the file.name
      path: paths.build,
      clean: true, //delete old files
    },

    plugins: buildPlugins(paths, options),

    module: {
      // rules configure loaders (loaders handle not-js files (.ts, .png etc))
      rules: buildLoaders(options),
    },

    resolve: buildResolvers(), // allows importing without an extension(... from './index')
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}