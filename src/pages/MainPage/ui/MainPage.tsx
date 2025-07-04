import { Counter } from 'entitie/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div className='MainPage' style={{ color: 'blue' }}>
      <h1>{t('MainPage')}</h1>
      <Counter />
    </div>
  );
};

export default MainPage;
