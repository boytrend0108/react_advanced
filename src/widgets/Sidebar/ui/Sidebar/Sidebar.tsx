import cn from 'classnames';
import * as cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface Props {
  className?: string;
}

export const Sidebar: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, className)}
      {...otherProps}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
