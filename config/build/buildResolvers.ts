import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";


export function buildResolvers(options: BuildOptions): ResolveOptions {
  const resolvers = {
    extensions: ['.tsx', '.ts', '.js'], // alows importing without an extension
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    alias: {},
    mainFiles: ['index']
  };

  return resolvers;
}

