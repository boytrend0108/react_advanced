import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/themeContext';

// Sample avatar images for stories
const SAMPLE_AVATAR_URL =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
const SAMPLE_AVATAR_URL_2 =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    size: {
      control: 'number',
    },
  },
  args: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: SAMPLE_AVATAR_URL,
    alt: 'Avatar',
  },
};

export const Small: Story = {
  args: {
    src: SAMPLE_AVATAR_URL,
    alt: 'Small Avatar',
    size: 50,
  },
};

export const Medium: Story = {
  args: {
    src: SAMPLE_AVATAR_URL,
    alt: 'Medium Avatar',
    size: 100,
  },
};

export const Large: Story = {
  args: {
    src: SAMPLE_AVATAR_URL,
    alt: 'Large Avatar',
    size: 150,
  },
};

export const ExtraLarge: Story = {
  args: {
    src: SAMPLE_AVATAR_URL_2,
    alt: 'Extra Large Avatar',
    size: 200,
  },
};

export const WithoutAlt: Story = {
  args: {
    src: SAMPLE_AVATAR_URL,
    size: 100,
  },
};

export const BrokenImage: Story = {
  args: {
    src: 'broken-image-url.jpg',
    alt: 'Broken Image Avatar',
    size: 100,
  },
};

export const Dark: Story = {
  args: {
    src: SAMPLE_AVATAR_URL,
    alt: 'Avatar in Dark Theme',
    size: 100,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const LargeDark: Story = {
  args: {
    src: SAMPLE_AVATAR_URL_2,
    alt: 'Large Avatar in Dark Theme',
    size: 150,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
