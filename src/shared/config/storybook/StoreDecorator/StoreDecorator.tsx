import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator =
  (initialState: StateSchema) => (Story: StoryFn) => {
    console.log('StoreDecorator>>>>>>>>>', initialState);
    return (
      <div>
        <StoreProvider initialState={initialState}>
          <Story />
        </StoreProvider>
      </div>
    );
  };

// This decorator provides a mock store for Storybook, allowing components to access the store's state and actions.
