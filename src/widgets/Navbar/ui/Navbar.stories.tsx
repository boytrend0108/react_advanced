import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/themeContext';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dakr: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
