import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/themeContext';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
