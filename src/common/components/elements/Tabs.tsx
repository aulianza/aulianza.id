import { useState } from 'react';

interface TabProps {
  label: string;
  children: React.ReactNode;
}

interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

export const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

export const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className='rounded-lg border-x border-b dark:border-neutral-800'>
      <div className='flex gap-1'>
        {children?.map((child, index) => (
          <button
            key={index}
            className={`flex-1 px-4 py-3 text-center ${
              activeTab === index
                ? 'bg-neutral-500 text-neutral-100 dark:bg-neutral-400 dark:text-neutral-900'
                : 'darktext-neutral-100 bg-neutral-200 dark:bg-neutral-800'
            }`}
            onClick={() => handleTabClick(index)}
          >
            {child?.props?.label}
          </button>
        ))}
      </div>
      <div className='px-8 py-5'>{children[activeTab]}</div>
    </div>
  );
};
