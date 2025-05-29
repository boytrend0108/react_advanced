import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';
import { ComponentRender } from 'shared/config/tests/ComponentRender/ComponentRender';

describe('Sidebar component', () => {
  test('renders sidebar ', () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    expect(screen.getByTestId('value')).toHaveTextContent('10');
  });

  test('increment', () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    fireEvent.click(screen.getByTestId('counter-increment'));

    expect(screen.getByTestId('value')).toHaveTextContent('11');
  });

  test('decrement', () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    fireEvent.click(screen.getByTestId('counter-decrement'));

    expect(screen.getByTestId('value')).toHaveTextContent('9');
  });
});
