import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';
import { ArticleBlockType } from '../../model/types/article';

const meta: Meta<typeof ArticleTextBlockComponent> = {
  title: 'entities/Article/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,
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
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js.',
      ],
    },
  },
};

export const WithoutTitle: Story = {
  args: {
    block: {
      id: '2',
      type: ArticleBlockType.TEXT,
      paragraphs: [
        'Этот блок не имеет заголовка и содержит только текстовые параграфы.',
        'Можно использовать такие блоки для основного содержимого статьи без дополнительных заголовков.',
      ],
    },
  },
};

export const SingleParagraph: Story = {
  args: {
    block: {
      id: '3',
      type: ArticleBlockType.TEXT,
      title: 'Краткий блок',
      paragraphs: ['Этот блок содержит только один параграф текста.'],
    },
  },
};

export const LongContent: Story = {
  args: {
    block: {
      id: '4',
      type: ArticleBlockType.TEXT,
      title: 'Детальное описание',
      paragraphs: [
        'Этот блок содержит несколько параграфов с подробной информацией.',
        'Первый параграф обычно содержит введение в тему.',
        'Второй параграф развивает основную идею.',
        'Третий параграф может содержать примеры или дополнительные детали.',
        'Заключительный параграф подводит итоги или делает выводы.',
      ],
    },
  },
};
