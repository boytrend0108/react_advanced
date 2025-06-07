import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from 'shared/config/i18n/i18nForTest';

export const TranslationDecorator = (Story: StoryFn) => (
  <I18nextProvider i18n={i18nForTest}>
    <Story />
  </I18nextProvider>
);
