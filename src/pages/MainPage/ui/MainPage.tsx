import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div className='MainPage'>
      <h1>{t('MainPage')}</h1>
    </div>
  );
};

export default MainPage;
