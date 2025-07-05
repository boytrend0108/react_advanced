import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RequaredAuth } from './RequaredAuth';

// Mock the routerConfig to avoid import issues
jest.mock('shared/config/routerConfig/routerConfig', () => ({
  routePath: {
    main: '/',
  },
}));

describe('RequaredAuth', () => {
  const TestComponent = () => (
    <div data-testid='protected-content'>Protected Content</div>
  );

  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    jest.clearAllMocks();
  });

  afterEach(() => {
    // Clean up after each test
    localStorage.clear();
  });

  describe('when user is authenticated', () => {
    test('renders children when user exists in localStorage', () => {
      const mockUser = { id: 1, name: 'John Doe', email: 'john@example.com' };
      localStorage.setItem('user', JSON.stringify(mockUser));

      render(
        <MemoryRouter>
          <RequaredAuth>
            <TestComponent />
          </RequaredAuth>
        </MemoryRouter>
      );

      expect(screen.getByTestId('protected-content')).toBeInTheDocument();
      expect(screen.getByText('Protected Content')).toBeInTheDocument();
    });

    test('renders children when user object exists even if empty', () => {
      localStorage.setItem('user', JSON.stringify({}));

      render(
        <MemoryRouter>
          <RequaredAuth>
            <TestComponent />
          </RequaredAuth>
        </MemoryRouter>
      );

      expect(screen.getByTestId('protected-content')).toBeInTheDocument();
    });

    test('renders multiple children components', () => {
      const mockUser = { id: 1 };
      localStorage.setItem('user', JSON.stringify(mockUser));

      render(
        <MemoryRouter>
          <RequaredAuth>
            <div data-testid='child-1'>Child 1</div>
            <div data-testid='child-2'>Child 2</div>
          </RequaredAuth>
        </MemoryRouter>
      );

      expect(screen.getByTestId('child-1')).toBeInTheDocument();
      expect(screen.getByTestId('child-2')).toBeInTheDocument();
    });
  });

  describe('when user is not authenticated', () => {
    test('redirects to main page when localStorage is empty', () => {
      render(
        <MemoryRouter initialEntries={['/protected']}>
          <RequaredAuth>
            <TestComponent />
          </RequaredAuth>
        </MemoryRouter>
      );

      expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
    });

    test('redirects to main page when user is null', () => {
      localStorage.setItem('user', 'null');

      render(
        <MemoryRouter initialEntries={['/protected']}>
          <RequaredAuth>
            <TestComponent />
          </RequaredAuth>
        </MemoryRouter>
      );

      expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
    });

    test('redirects to main page when localStorage user is undefined', () => {
      localStorage.setItem('user', 'undefined');

      render(
        <MemoryRouter initialEntries={['/protected']}>
          <RequaredAuth>
            <TestComponent />
          </RequaredAuth>
        </MemoryRouter>
      );

      expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
    });
  });

  describe('error handling', () => {
    test('handles invalid JSON in localStorage gracefully', () => {
      localStorage.setItem('user', 'invalid-json-string');

      render(
        <MemoryRouter initialEntries={['/protected']}>
          <RequaredAuth>
            <TestComponent />
          </RequaredAuth>
        </MemoryRouter>
      );

      expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
    });

    test('handles malformed JSON object', () => {
      localStorage.setItem('user', '{"name": "John", "id":}');

      render(
        <MemoryRouter initialEntries={['/protected']}>
          <RequaredAuth>
            <TestComponent />
          </RequaredAuth>
        </MemoryRouter>
      );

      expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
    });

    test('handles empty string in localStorage', () => {
      localStorage.setItem('user', '');

      render(
        <MemoryRouter initialEntries={['/protected']}>
          <RequaredAuth>
            <TestComponent />
          </RequaredAuth>
        </MemoryRouter>
      );

      expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
    });
  });

  describe('component props', () => {
    test('accepts className prop without breaking', () => {
      const mockUser = { id: 1 };
      localStorage.setItem('user', JSON.stringify(mockUser));

      const { container } = render(
        <MemoryRouter>
          <RequaredAuth className='test-class'>
            <TestComponent />
          </RequaredAuth>
        </MemoryRouter>
      );

      // Component should render successfully even with className prop
      expect(container.firstChild).toBeInTheDocument();
      expect(screen.getByTestId('protected-content')).toBeInTheDocument();
    });

    test('works without any props', () => {
      const mockUser = { id: 1 };
      localStorage.setItem('user', JSON.stringify(mockUser));

      render(
        <MemoryRouter>
          <RequaredAuth>
            <TestComponent />
          </RequaredAuth>
        </MemoryRouter>
      );

      expect(screen.getByTestId('protected-content')).toBeInTheDocument();
    });
  });
});
