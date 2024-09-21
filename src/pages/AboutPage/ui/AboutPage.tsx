import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div className='about'>
      <h1>{t('About')}</h1>
    </div>
  );
};

export default AboutPage;
