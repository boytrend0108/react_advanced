import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { Input } from './Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/themeContext';
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Theme } from 'app/providers/ThemeProvider/lib/themeContext';

const meta = {
  title: 'shared/Input',
  component: Input,
  decorators: [ThemeDecorator(Theme.DARK)],

  tags: ['autodocs'],
  argTypes: {},
  args: {
    placeholder: 'Enter text',
    value: 'some text ',
    onChange: (value: string) => console.log(value),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
