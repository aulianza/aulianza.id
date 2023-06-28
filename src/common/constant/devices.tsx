import {
  BsLaptop,
  BsPhone,
  BsSmartwatch,
  BsSpeaker,
  BsTablet,
  BsTv,
} from 'react-icons/bs';

import { DeviceInfoProps } from '../types/spotify';

const iconSize = 24;
const iconClassName = 'w-auto text-neutral-700 dark:text-neutral-300';

export const PAIR_DEVICES: Record<string, DeviceInfoProps> = {
  Computer: {
    icon: <BsLaptop className={iconClassName} size={iconSize} />,
    model: 'MacBook Pro M1',
    id: 'aulianza-mac',
  },
  Smartphone: {
    icon: <BsPhone className={iconClassName} size={iconSize} />,
    model: 'iPhone 13 Pro',
    id: 'aulianza-iphone',
  },
  Tablet: {
    icon: <BsTablet className={iconClassName} size={iconSize} />,
    model: 'iPad Mini 6',
    id: 'aulianza-ipad',
  },
  Smartwatch: {
    icon: <BsSmartwatch className={iconClassName} size={iconSize} />,
    model: 'Apple Watch Series 7',
    id: 'aulianza-iwatch',
  },
  Speaker: {
    icon: <BsSpeaker className={iconClassName} size={iconSize} />,
    model: 'Sony',
    id: 'aulianza-speaker',
  },
  TV: {
    icon: <BsTv className={iconClassName} size={iconSize} />,
    model: 'Android TV',
    id: 'aulianza-tv',
  },
};
