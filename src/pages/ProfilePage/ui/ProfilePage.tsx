import cn from 'classnames';
import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}

const ProfilePage: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();

  return (
    <div className={cn('', className)} {...otherProps}>
      {t('ProfilePage')}
    </div>
  );
};

export default ProfilePage;
