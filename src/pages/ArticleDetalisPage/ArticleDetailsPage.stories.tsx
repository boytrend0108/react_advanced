import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entitie/Article/model/types/article';
import {
  ArticleBlockType,
  ArticleType,
} from 'entitie/Article/model/types/article';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta: Meta<typeof ArticleDetailsPage> = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js.',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>',
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
      title: 'JavaScript Logo',
    },
  ],
};

export const Normal: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/articles/1']}>
        <Story />
      </MemoryRouter>
    ),
    StoreDecorator({
      counter: { value: 0 },
      user: {},
      articleDetails: {
        data: article,
        isLoading: false,
      },
    }),
  ],
};

export const Loading: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/articles/1']}>
        <Story />
      </MemoryRouter>
    ),
    StoreDecorator({
      counter: { value: 0 },
      user: {},
      articleDetails: {
        isLoading: true,
      },
    }),
  ],
};

export const Error: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/articles/1']}>
        <Story />
      </MemoryRouter>
    ),
    StoreDecorator({
      counter: { value: 0 },
      user: {},
      articleDetails: {
        isLoading: false,
        error: 'Ошибка загрузки статьи',
      },
    }),
  ],
};

export const NotFound: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/articles/']}>
        <Story />
      </MemoryRouter>
    ),
    StoreDecorator({
      counter: { value: 0 },
      user: {},
      articleDetails: {
        isLoading: false,
      },
    }),
  ],
};
