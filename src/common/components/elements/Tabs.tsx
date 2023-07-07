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
    <div className='border-b border-x dark:border-neutral-800 rounded-lg'>
      <div className='flex gap-1'>
        {children?.map((child, index) => (
          <button
            key={index}
            className={`py-3 px-4 flex-1 text-center ${
              activeTab === index
                ? 'bg-neutral-500 dark:bg-neutral-400 text-neutral-100 dark:text-neutral-900'
                : 'bg-neutral-200 dark:bg-neutral-800 darktext-neutral-100'
            }`}
            onClick={() => handleTabClick(index)}
          >
            {child?.props?.label}
          </button>
        ))}
      </div>
      <div className='py-5 px-8'>{children[activeTab]}</div>
    </div>
  );
};
