import {
  BiArchive as ProjectIcon,
  BiAt as ThreadsIcon,
  BiBookBookmark as LearnIcon,
  BiCategoryAlt as DashboardIcon,
  BiEditAlt as BlogIcon,
  BiEnvelope as ContactIcon,
  BiHomeSmile as HomeIcon,
  BiLeaf as ProfileIcon,
  BiLineChart as AnalyticsIcon,
} from 'react-icons/bi';
import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTwitter as TwitterIcon,
} from 'react-icons/bs';
import { SiJavascript } from 'react-icons/si';

import { MenuItemProps } from '../types/menu';

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home',
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Dashboard',
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects',
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Blog',
  },
  {
    title: 'Learn',
    href: '/learn',
    icon: <LearnIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Learn',
  },
  {
    title: 'About',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About',
  },
  {
    title: 'Playground',
    href: '/playground',
    icon: <SiJavascript size={iconSize} />,
    isShow: false,
    isExternal: false,
    eventName: 'Pages: Playground',
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: false,
    isExternal: false,
    eventName: 'Pages: Contact',
  },
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: 'Github',
    href: 'https://github.com/aulianza',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github',
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/aulianza/',
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Linkedin',
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/aulianzaa',
    icon: <TwitterIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Twitter',
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/aulianza',
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Instagram',
  },
  {
    title: 'Threads',
    href: 'https://www.threads.net/@aulianza',
    icon: <ThreadsIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Threads',
  },
];

export const EXTERNAL_LINKS: MenuItemProps[] = [
  {
    title: 'Analytics',
    href: 'https://umami.aulianza.id/share/LK5kiRuosw9pORLa/aulianza.id',
    icon: <AnalyticsIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'External Link: Analytics',
  },
];
