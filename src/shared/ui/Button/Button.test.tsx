import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';
import * as styles from './Button.module.scss';

describe('Button component', () => {
  test('renders button with some class', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('renders button with custom className', () => {
    const customClass = 'custom-class';
    render(<Button className={customClass}>TEST</Button>);
    const button = screen.getByText('TEST');
    expect(button).toHaveClass(customClass);
    expect(button).toHaveClass(styles.Button);
  });

  test('renders button with CLEAR theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    const button = screen.getByText('TEST');
    expect(button).toHaveClass(styles.Button);
    expect(button).toHaveClass(styles.clear);
  });

  test('passes through other props', () => {
    render(<Button data-testid='custom-button'>TEST</Button>);
    const button = screen.getByTestId('custom-button');
    expect(button).toBeInTheDocument();
  });

  test('applies classnames in the correct order', () => {
    const customClass = 'custom-class';
    render(
      <Button className={customClass} theme={ThemeButton.CLEAR}>
        TEST
      </Button>
    );
    const button = screen.getByText('TEST');
    expect(button.className).toBe(
      `${styles.Button} ${customClass} ${styles.clear}`
    );
  });
});
