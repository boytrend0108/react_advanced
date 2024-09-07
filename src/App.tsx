import { Route, Routes } from 'react-router';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage.async';
import { Suspense } from 'react';
import { CounterAsync } from './pages/Counter/Counter.async';

export const App = () => {
  return (
    <div className='app dark'>
      <Link to='/'>Main</Link>
      <Link to='/counter'>Counter</Link>

      <Suspense fallback='Loading....'>
        <Routes>
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/counter' element={<CounterAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
