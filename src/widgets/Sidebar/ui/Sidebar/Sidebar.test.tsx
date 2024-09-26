import { fireEvent, render, screen } from '@testing-library/react';
import * as cls from './Sidebar.module.scss';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';

describe('Sidebar component', () => {
  test('renders sidebar ', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle sidebar ', () => {
    renderWithTranslation(<Sidebar />);
    const toogleBtn = screen.getByTestId('sidebar-toogle');

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toogleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
