import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entitie/Profile';

const defaultAsyncReducers = {
  loginForm: loginReducer,
  profile: profileReducer,
} as ReducersMapObject<StateSchema>;

export const StoreDecorator =
  (initialState: StateSchema) => (Story: StoryFn) => {
    return (
      <div>
        <StoreProvider
          initialState={initialState}
          asyncReducers={defaultAsyncReducers}
        >
          <Story />
        </StoreProvider>
      </div>
    );
  };
