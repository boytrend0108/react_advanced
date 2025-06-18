import path from 'path';
import { BuildEnv, BuildPath } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  }

  const mode = env.MODE || 'development';
  const port = env.PORT || 3000;

  const isDev = mode === 'development';
  const apiUrl = env.API || 'http://localhost:8000';

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    apiUrl,
  });

  return config
};
