import { ReactNode } from 'react';

interface SectionSubHeadingProps {
  children?: ReactNode;
}

const SectionSubHeading = ({ children }: SectionSubHeadingProps) => {
  return (
    <div className='flex flex-col lg:flex-row justify-between lg:items-center gap-2 text-neutral-600 dark:text-neutral-400'>
      {children}
    </div>
  );
};

export default SectionSubHeading;
