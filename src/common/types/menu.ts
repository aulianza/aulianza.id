export type MenuItemProps = {
  title: string;
  href: string;
  icon: JSX.Element;
  isShow?: boolean;
  isExternal: boolean;
  onClick?: () => void;
};
