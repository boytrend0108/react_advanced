import { BuildOptions } from "../types/config";

export function buildBabelLoader(options: BuildOptions) {
  return {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript",
          [
            "@babel/preset-react",
            {
              runtime: "automatic",
              development: options.isDev,
              importSource: options.isDev ? "@welldone-software/why-did-you-render" : "react"
            }
          ]
        ],
        plugins: [options.isDev && require.resolve('react-refresh/babel')].filter(Boolean),
      },
    }
  };
}