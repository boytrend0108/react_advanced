import type { Meta, StoryObj } from '@storybook/react';

import { CountrySelect } from './CountrySelect';
import { Country } from '../../model/types/country';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/themeContext';

const meta = {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'select',
      options: Object.values(Country),
    },
    readonly: {
      control: 'boolean',
    },
  },
  args: {},
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithValueUkraine: Story = {
  args: {
    value: Country.Ukraine,
  },
};

export const WithValueUSA: Story = {
  args: {
    value: Country.USA,
  },
};

export const WithValueGermany: Story = {
  args: {
    value: Country.Germany,
  },
};

export const Readonly: Story = {
  args: {
    value: Country.Ukraine,
    readonly: true,
  },
};

export const Dark: Story = {
  args: {
    value: Country.USA,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ReadonlyDark: Story = {
  args: {
    value: Country.Germany,
    readonly: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
