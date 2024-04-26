import { motion } from 'framer-motion';
import { FC } from 'react';

import Navigation from './Navigation';

const MobileMenu: FC = () => {
  return (
    <motion.div
      className='my-3 flex h-screen flex-col'
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Navigation />
    </motion.div>
  );
};

export default MobileMenu;
