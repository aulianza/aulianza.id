import { motion } from 'framer-motion';
import { FC } from 'react';

import Navigation from './Navigation';
import Breakline from '../elements/Breakline';

const MobileMenu: FC = () => {
  return (
    <motion.div
      className='my-5'
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Breakline className='mt-2' />
      <Navigation />
    </motion.div>
  );
};

export default MobileMenu;
