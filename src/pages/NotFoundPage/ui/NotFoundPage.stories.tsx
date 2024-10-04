import type { Meta, StoryObj } from '@storybook/react';

import { NotFoundPage } from './NotFoundPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider2/lib/themeContext';

const meta = {
  title: 'page/NotFoundPage',
  component: NotFoundPage,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ligth: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
