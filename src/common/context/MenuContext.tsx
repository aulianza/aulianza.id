import { createContext } from 'react';

type MenuContextType = {
  hideNavbar: () => void;
};

export const MenuContext = createContext<MenuContextType>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  hideNavbar: () => {},
});
