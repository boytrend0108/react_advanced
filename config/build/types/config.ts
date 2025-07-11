export type BuildMode = 'production' | 'development';

export interface BuildPath {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  PORT: string | number;
  MODE: BuildMode;
  API: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPath;
  isDev: boolean;
  apiUrl: string;
  port: number | string;
  project: 'frontend' | 'storybook' | 'jest';
}