import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider2/lib/themeContext';

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dakr: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
