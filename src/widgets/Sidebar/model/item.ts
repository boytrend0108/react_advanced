import { routePath } from "shared/config/routerConfig/routerConfig";
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/article.svg';

export interface SidebarItemType {
  path: string;
  page: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean
};

export const sidebarItems: SidebarItemType[] = [
  {
    path: routePath.main,
    page: 'Main',
    Icon: HomeIcon,
  },
  {
    path: routePath.about,
    page: 'About',
    Icon: AboutIcon,
  },
  {
    path: routePath.profile,
    page: 'Profile',
    Icon: ProfileIcon,
    authOnly: true
  },
  {
    path: routePath.articles,
    page: 'Articles',
    Icon: ArticlesIcon,
    authOnly: true
  },


]