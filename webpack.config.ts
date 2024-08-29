import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPath } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, "public", "index.html"),
  }

  const mode = env.MODE || 'development';
  const port = env.PORT || 3000;

  const isDev = mode === 'development';

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });

  return config
};
