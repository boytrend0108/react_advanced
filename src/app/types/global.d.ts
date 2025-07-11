// declare module '*.scss' {
//   interface IClassNames {
//     [className: string]: string
//   }
//   const classNames: IClassNames;
//   export = classNames;
// }

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export = classes;
}

declare module '*.jpeg'
declare module '*.jpg'
declare module '*.png'
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'frontend' | 'storybook' | 'jest';

type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]>; }
  : T;