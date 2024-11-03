import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider2/lib/themeContext';
import { ThemeProvider2 } from 'app/providers/ThemeProvider2';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) =>
  (
    <ThemeProvider2 initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider2>
  );
