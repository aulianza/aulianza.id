import { ReactNode } from 'react';

interface PanelHeaderProps {
  title: string;
  children?: ReactNode;
}

const PanelHeader = ({ title, children }: PanelHeaderProps) => {
  return (
    <div className='flex justify-between border border-x-0 border-t-0 border-b-neutral-700 px-3 py-2'>
      <div className='rounded-md bg-neutral-600 px-2 py-1  text-xs text-neutral-50'>
        {title}
      </div>
      {children && children}
    </div>
  );
};

export default PanelHeader;
