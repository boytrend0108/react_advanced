import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';

export const StoreDecorator =
  (initialState: StateSchema) => (Story: StoryFn) => {
    return (
      <div>
        <StoreProvider initialState={initialState}>
          <Story />
        </StoreProvider>
      </div>
    );
  };

// This decorator provides a mock store for Storybook, allowing components to access the store's state and actions.
