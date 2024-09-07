import { Route, Routes } from 'react-router';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage.async';
import { Suspense, useContext } from 'react';
import { CounterAsync } from './pages/Counter/Counter.async';
import { ThemeContext } from './theme/ThemeContext';

export const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Link to='/'>Main</Link>
      <Link to='/counter'>Counter</Link>
      <button onClick={() => setTheme()}>Toogle</button>

      <Suspense fallback='Loading....'>
        <Routes>
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/counter' element={<CounterAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
