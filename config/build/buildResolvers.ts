import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  const resolvers = {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'], //what directories should be searched when resolving modules.
    mainFiles: ['index'],
    alias: {} // allows page/.../.../..
  };

  return resolvers;
}