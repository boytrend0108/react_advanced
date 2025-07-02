import type { Meta, StoryObj } from '@storybook/react';
import avatar from 'shared/assets/icons/user.png';
import { ProfileCard } from './ProfileCard';
import { Country } from 'entitie/Country';
import { Currency } from 'entitie/Currency';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from 'app/providers/StoreProvider';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'ulbi tv',
      first: 'asd',
      city: 'asf',
      currency: Currency.USD,
      avatar,
    },
  },
  decorators: [StoreDecorator({} as StateSchema)],
};

export const withError: Story = {
  args: {
    error: 'true',
  },
  decorators: [StoreDecorator({} as StateSchema)],
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  decorators: [StoreDecorator({} as StateSchema)],
};
