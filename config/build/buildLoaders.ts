import webpack from "webpack";

type Rules = false | "" | 0 | webpack.RuleSetRule | "...";

export function buildLoaders(): Rules[] {
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const loaders = [
    typeScriptLoader
  ]

  return loaders;
}