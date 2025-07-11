import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import i18next from 'eslint-plugin-i18next';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  {
    plugins: {
      'react-hooks': pluginReactHooks,
      'unused-imports': unusedImports,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  i18next.configs['flat/recommended'],
  { ignores: ['dist/*', 'storybook-static/*'] },
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-require-imports': 'warn',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'react/display-name': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },

  {
    languageOptions: {
      globals: {
        __IS_DEV__: 'writable',
        __API__: 'writable',
        __PROJECT__: 'writable',
        __dirname: 'writable',
        React: 'readonly',
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
      },
    },
  },
  {
    files: ['**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
      'i18next/valid-key': 'off',
    },
  },
];
