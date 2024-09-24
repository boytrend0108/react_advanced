import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div className='about'>
      <h1>{t('About', { ns: 'about' })}</h1>
    </div>
  );
};

export default AboutPage;
