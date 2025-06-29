import type { Meta, StoryObj } from '@storybook/react';

import { CurrencySelect } from './CurrencySelect';
import { Currency } from '../../model/types/currency';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/themeContext';

const meta = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'select',
      options: Object.values(Currency),
    },
    readonly: {
      control: 'boolean',
    },
  },
  args: {},
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithValueUSD: Story = {
  args: {
    value: Currency.USD,
  },
};

export const WithValueEUR: Story = {
  args: {
    value: Currency.EUR,
  },
};

export const Readonly: Story = {
  args: {
    value: Currency.USD,
    readonly: true,
  },
};

export const Dark: Story = {
  args: {
    value: Currency.EUR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ReadonlyDark: Story = {
  args: {
    value: Currency.USD,
    readonly: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
