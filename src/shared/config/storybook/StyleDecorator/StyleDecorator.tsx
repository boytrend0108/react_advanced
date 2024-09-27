import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';

export const StyleDecorator = (Story: StoryFn) => (
  <div style={{ width: '90vw' }}>
    <Story />
  </div>
);
