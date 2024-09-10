import cn from 'classnames';

import './styles/index.scss';

import { AppRouter } from './providers/ThemeProvider/router';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProvider';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', theme)}>
      <Navbar />

      <AppRouter />
    </div>
  );
};
