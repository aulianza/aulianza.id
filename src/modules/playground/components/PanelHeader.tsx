import { ReactNode } from 'react';

interface PanelHeaderProps {
  title: string;
  children?: ReactNode;
}

const PanelHeader = ({ title, children }: PanelHeaderProps) => {
  return (
    <div className='flex justify-between py-2 px-3 border border-b-neutral-700 border-t-0 border-x-0'>
      <div className='py-1 px-2 bg-neutral-600 text-xs rounded-md text-neutral-50 font-sora'>
        {title}
      </div>
      {children && children}
    </div>
  );
};

export default PanelHeader;
