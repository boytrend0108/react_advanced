import type { Meta, StoryObj } from '@storybook/react';

import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';
import { ArticleBlockType } from '../../model/types/article';

const meta: Meta<typeof ArticleImageBlockComponent> = {
  title: 'entities/Article/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
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
      type: ArticleBlockType.IMAGE,
      src: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
      title: 'JavaScript Logo',
    },
  },
};

export const WithoutTitle: Story = {
  args: {
    block: {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://via.placeholder.com/600x400?text=Sample+Image',
      title: '',
    },
  },
};

export const LongTitle: Story = {
  args: {
    block: {
      id: '3',
      type: ArticleBlockType.IMAGE,
      src: 'https://via.placeholder.com/800x600?text=Article+Image',
      title:
        'Это очень длинный заголовок изображения, который демонстрирует, как компонент обрабатывает текст значительной длины под изображением',
    },
  },
};

export const PlaceholderImage: Story = {
  args: {
    block: {
      id: '4',
      type: ArticleBlockType.IMAGE,
      src: 'https://via.placeholder.com/400x300?text=Placeholder',
      title: 'Изображение-заглушка',
    },
  },
};
