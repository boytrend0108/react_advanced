import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/themeContext';

const meta = {
  title: 'shared/Select',
  component: Select,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    readonly: {
      control: 'boolean',
    },
    options: {
      control: 'object',
    },
  },
  args: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: 'option1', content: 'First option' },
  { value: 'option2', content: 'Second option' },
  { value: 'option3', content: 'Third option' },
];

export const Default: Story = {
  args: {
    label: 'Select an option',
    options: defaultOptions,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Select an option',
    options: defaultOptions,
    value: 'option2',
  },
};

export const WithoutLabel: Story = {
  args: {
    options: defaultOptions,
    value: 'option1',
  },
};

export const Readonly: Story = {
  args: {
    label: 'Select an option',
    options: defaultOptions,
    value: 'option2',
    readonly: true,
  },
};

export const ManyOptions: Story = {
  args: {
    label: 'Choose from many options',
    options: [
      { value: 'js', content: 'JavaScript' },
      { value: 'ts', content: 'TypeScript' },
      { value: 'py', content: 'Python' },
      { value: 'java', content: 'Java' },
      { value: 'cpp', content: 'C++' },
      { value: 'go', content: 'Go' },
      { value: 'rust', content: 'Rust' },
    ],
    value: 'ts',
  },
};

export const Dark: Story = {
  args: {
    label: 'Select an option',
    options: defaultOptions,
    value: 'option1',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ReadonlyDark: Story = {
  args: {
    label: 'Select an option',
    options: defaultOptions,
    value: 'option3',
    readonly: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
