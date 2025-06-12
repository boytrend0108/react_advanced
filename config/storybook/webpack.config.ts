import webpack from 'webpack';
import { BuildPath } from '../build/types/config';
import path from 'path';
import { buildCssLoaders } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    html: '',
    entry: '',
    build: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  config.module = config.module || {};
  config.module.rules = config.module.rules || [];

  const imageRule = config.module.rules.find((rule) => rule?.['test']?.test('.svg'));

  if (imageRule) {
    imageRule['exclude'] = /\.svg$/;
  }

  config.module.rules.push(buildSvgLoader());
  config.module?.rules?.push(buildCssLoaders(true));

  config.plugins?.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true), // Set __IS_DEV__ to true
    })
  );

  return config;
}

