import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface TabProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
}

export const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

export const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className='rounded border-x border-b dark:border-neutral-800'>
      <div className='flex flex-col gap-1.5 sm:flex-row md:gap-1'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 px-4 py-2 text-center font-medium ${
              activeTab === index
                ? 'bg-neutral-500 text-neutral-100 dark:bg-neutral-400 dark:text-neutral-900'
                : 'bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 hover:dark:text-neutral-200'
            } ${
              index === 0
                ? 'md:rounded-tl'
                : index === tabs.length - 1
                  ? 'md:rounded-tr'
                  : ''
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className='px-4 py-8 sm:px-8'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            {tabs[activeTab].children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
