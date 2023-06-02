import { createContext } from "react";

type MenuContextType = {
  hideNavbar: () => void;
};

export const MenuContext = createContext<MenuContextType>({
  hideNavbar: () => {},
});
