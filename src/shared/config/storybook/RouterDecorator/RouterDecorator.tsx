import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';

export const RouterDecorator = (Story: StoryFn) => (
  <div>
    <StoreProvider>
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </StoreProvider>
  </div>
);
