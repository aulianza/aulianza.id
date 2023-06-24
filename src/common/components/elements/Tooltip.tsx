import { motion } from 'framer-motion';
import React, { ReactNode, useState } from 'react';

interface TooltipProps {
  title: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ title, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const tooltipVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='relative inline-block'>
      <div
        className='tooltip-container relative'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {isTooltipVisible && (
        <motion.div
          className='tooltip bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-200 text-neutral-700 text-sm rounded px-3 py-4 absolute bottom-full'
          variants={tooltipVariants}
          initial='hidden'
          animate='visible'
        >
          {title}
          <div className='tooltip-arrow w-3 h-3 bg-neutral-100 dark:bg-neutral-900 absolute top-full left-1/2 transform -translate-x-1/2 -mt-2 rotate-45' />
        </motion.div>
      )}
    </div>
  );
};

export default Tooltip;
