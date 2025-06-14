import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/themeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: 'test',
        password: '1111',
        isLoading: false,
        error: '',
      },
    } as StateSchema),
  ],
};

export const Error: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: 'test',
        password: '1111',
        isLoading: false,
        error: 'some error',
      },
    } as StateSchema),
  ],
};

export const Disalbed: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: 'test',
        password: '1111',
        isLoading: true,
        error: '',
      },
    } as StateSchema),
  ],
};

export const DisalbedDark: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: 'test',
        password: '1111',
        isLoading: true,
        error: '',
      },
    } as StateSchema),
    ThemeDecorator(Theme.DARK),
  ],
};
