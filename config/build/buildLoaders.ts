import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

type Rules = false | "" | 0 | webpack.RuleSetRule | "...";

export function buildLoaders(options: BuildOptions): Rules[] {
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => resourcePath.includes('.module.'),
            localIdentName: options.isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
          },
        },
      }, ,
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  const loaders = [
    typeScriptLoader,
    sassLoader,
  ]

  return loaders;
}