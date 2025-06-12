import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/themeContext';

const meta = {
  title: 'shared/Text',
  component: Text,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { text: 'This is a text component', title: 'This is a title' },
};

export const Error: Story = {
  args: {
    text: 'This is a text component',
    title: 'This is a title',
    theme: TextTheme.ERROR,
  },
};

export const OnlyTitle: Story = {
  args: { title: 'This is a title' },
};

export const OnlyText: Story = {
  args: { text: 'This is a text component' },
};

export const PrimaryDark: Story = {
  args: { text: 'This is a text component', title: 'This is a title' },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
  args: { title: 'This is a title' },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
  args: { text: 'This is a text component' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
