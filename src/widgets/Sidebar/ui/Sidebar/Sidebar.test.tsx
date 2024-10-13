import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { ComponentRender } from 'shared/config/tests/ComponentRender/ComponentRender';

describe('Sidebar component', () => {
  test('renders sidebar ', () => {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle sidebar ', () => {
    ComponentRender(<Sidebar />);
    const toogleBtn = screen.getByTestId('sidebar-toogle');

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toogleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
