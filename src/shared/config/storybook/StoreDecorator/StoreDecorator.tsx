import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (Story: StoryFn) => (
  <div>
    <StoreProvider>
      <Story />
    </StoreProvider>
  </div>
);
