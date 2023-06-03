import Icon from 'supercons';
import { MenuItemProps } from '../types/menu';

const iconSize = 26;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    name: 'Home',
    href: '/',
    icon: <Icon glyph='home' size={iconSize} />,
    is_show: true,
  },
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: <Icon glyph='grid' size={iconSize} />,
    is_show: true,
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: <Icon glyph='explore' size={iconSize} />,
    is_show: true,
  },
  {
    name: 'Blog',
    href: '/blog',
    icon: <Icon glyph='post' size={iconSize} />,
    is_show: true,
  },
  {
    name: 'Tools',
    href: '/tools',
    icon: <Icon glyph='bug' size={iconSize} />,
    is_show: false,
  },
  {
    name: 'About',
    href: '/about',
    icon: <Icon glyph='profile' size={iconSize} />,
    is_show: true,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <Icon glyph='email' size={iconSize} />,
    is_show: true,
  },
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/aulianza/',
    icon: <Icon glyph='channels' size={iconSize} />,
    is_show: true,
  },
  {
    name: 'Github',
    href: 'https://github.com/aulianza',
    icon: <Icon glyph='github' size={iconSize} />,
    is_show: true,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/aulianza',
    icon: <Icon glyph='instagram' size={iconSize} />,
    is_show: true,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/aulianzaa',
    icon: <Icon glyph='twitter' size={iconSize} />,
    is_show: false,
  },
];
