import { FC } from 'react';
import { motion } from 'framer-motion';

import Breakline from '../elements/Breakline';
import ToggleMode from '../elements/ToggleMode';
import Navigation from './Navigation';

const MobileMenu: FC = () => {
  return (
    <motion.div
      className='my-5'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Breakline className='mb-2' />
      <ToggleMode />
      <Breakline className='mt-2' />
      <Navigation />
    </motion.div>
  );
};

export default MobileMenu;
