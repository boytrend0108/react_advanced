import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/item';
import { memo } from 'react';

interface Props {
  className?: string;
  item: SidebarItemType;
  colapsed?: boolean;
}

export const SidebarItem: React.FC<Props> = memo((props) => {
  const { className, item, colapsed, ...otherProps } = props;
  const { t } = useTranslation();

  return (
    <div
      className={cn(cls.SidebarItem, className, { [cls.collapsed]: colapsed })}
      {...otherProps}
    >
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
        className={cls.item}
      >
        <item.Icon className={cls.icon} />

        <span className={cls.link}>{t(item.page)}</span>
      </AppLink>
    </div>
  );
});
