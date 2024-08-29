import webpack from "webpack";

type Rules = false | "" | 0 | webpack.RuleSetRule | "...";

export function buildLoaders(): Rules[] {
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
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