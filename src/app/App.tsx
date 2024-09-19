import cn from 'classnames';

import './styles/index.scss';

import { AppRouter } from './providers/ThemeProvider/router';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', theme)}>
      <Navbar />

      <div className='content-page'>
        <Sidebar />
        <div className='page-wrapper'>
          <AppRouter />
        </div>
      </div>
    </div>
  );
};
