import { BsFillBootstrapFill } from 'react-icons/bs';
import {
  SiApollographql,
  SiGraphql,
  SiJavascript,
  SiLaravel,
  SiMui,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWordpress,
} from 'react-icons/si';

type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  PHP: <SiPhp size={iconSize} className='text-blue-500' />,
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className='text-purple-500' />
  ),
  GraphQL: <SiGraphql size={iconSize} className='text-pink-600' />,
  Apollo: <SiApollographql size={iconSize} />,
  WordPress: <SiWordpress size={iconSize} />,
  Laravel: <SiLaravel size={iconSize} className='text-red-500' />,
  'Material UI': <SiMui size={iconSize} className='text-sky-400' />,
  Vite: <SiVite size={iconSize} className='text-purple-500' />,
};
