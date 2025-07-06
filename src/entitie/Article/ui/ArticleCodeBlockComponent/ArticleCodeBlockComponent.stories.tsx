import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';
import { ArticleBlockType } from '../../model/types/article';

const meta: Meta<typeof ArticleCodeBlockComponent> = {
  title: 'entities/Article/ArticleCodeBlockComponent',
  component: ArticleCodeBlockComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    block: {
      id: '1',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>',
    },
  },
};

export const JavaScript: Story = {
  args: {
    block: {
      id: '2',
      type: ArticleBlockType.CODE,
      code: 'const greet = (name) => {\n  console.log(`Hello, ${name}!`);\n};\n\ngreet("World");',
    },
  },
};

export const TypeScript: Story = {
  args: {
    block: {
      id: '3',
      type: ArticleBlockType.CODE,
      code: 'interface User {\n  id: string;\n  name: string;\n  email: string;\n}\n\nfunction createUser(userData: User): User {\n  return {\n    ...userData,\n    id: Math.random().toString(36),\n  };\n}',
    },
  },
};
