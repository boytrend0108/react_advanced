import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev, apiUrl } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js', // contenthash - add suffix to the file.name
      path: paths.build,
      publicPath: "/", // to handle ./artixles/:id
      clean: true, //delete old files
    },

    plugins: buildPlugins(paths, options, isDev, apiUrl),

    module: {
      // rules configure loaders (loaders handle not-js files (.ts, .png etc))
      rules: buildLoaders(options),
    },

    resolve: buildResolvers(options), // allows importing without an extension(... from './index')
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}