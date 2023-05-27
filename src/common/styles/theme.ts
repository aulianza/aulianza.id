import { extendTheme } from '@chakra-ui/react';
import { Plus_Jakarta_Sans, } from "next/font/google";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--jakartaSans-font",
  subsets: ["latin"],
  display: "fallback",
  weight: ["400", "500", "600", "700", "800"],
});

const theme = extendTheme({
  fonts: {
    body: jakartaSans.style.fontFamily,
    heading: jakartaSans.style.fontFamily,
  },
});

export default theme;