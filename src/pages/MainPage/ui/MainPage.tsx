import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div className='MainPage'>
      <h1>{t('MainPage')}</h1>
      <BugButton />
    </div>
  );
};

export default MainPage;
