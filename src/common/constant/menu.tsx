import {
  BiArchive as ProjectIcon,
  BiCategoryAlt as DashboardIcon,
  BiEditAlt as BlogIcon,
  BiEnvelope as ContactIcon,
  BiHomeSmile as HomeIcon,
  BiLaugh as ProfileIcon,
} from 'react-icons/bi';
import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTwitter as TwitterIcon,
} from 'react-icons/bs';

import { MenuItemProps } from '../types/menu';

const iconSize = 20;
const iconSizeSocial = 18;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
  },
  {
    title: 'About',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: false,
    isExternal: false,
  },
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: 'Github',
    href: 'https://github.com/aulianza',
    icon: <GithubIcon size={iconSizeSocial} />,
    isShow: true,
    isExternal: true,
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/aulianza/',
    icon: <LinkedinIcon size={iconSizeSocial} />,
    isShow: true,
    isExternal: true,
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/aulianzaa',
    icon: <TwitterIcon size={iconSizeSocial} />,
    isShow: false,
    isExternal: true,
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/aulianza',
    icon: <InstagramIcon size={iconSizeSocial} />,
    isShow: true,
    isExternal: true,
  },
];
