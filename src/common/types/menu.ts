import { ReactNode } from 'react';

export type MenuItemProps = {
  name: string;
  href: string;
  icon: ReactNode;
  is_show: boolean;
};
