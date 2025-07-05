import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoaders } from "./loaders/buildCssLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

type Rules = false | "" | 0 | webpack.RuleSetRule | "...";

// The loaders allow to process files that are not js files (like ts, png, etc)

export function buildLoaders(options: BuildOptions): Rules[] {

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const babelLoader = buildBabelLoader(options);
  const sassLoader = buildCssLoaders(options.isDev)
  const svgLoader = buildSvgLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i, // images and fonts
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const loaders = [
    babelLoader,
    typeScriptLoader,
    sassLoader,
    svgLoader,
    fileLoader,
  ]

  return loaders;
}