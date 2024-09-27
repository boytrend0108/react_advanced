import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoaders } from "./loaders/buildCssLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";

type Rules = false | "" | 0 | webpack.RuleSetRule | "...";

export function buildLoaders(options: BuildOptions): Rules[] {
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        "presets": ["@babel/preset-env", "@babel/preset-typescript"],
      },
    }
  };

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