import { ReactNode } from 'react';

interface SectionSubHeadingProps {
  children?: ReactNode;
}

const SectionSubHeading = ({ children }: SectionSubHeadingProps) => {
  return (
    <div className='flex flex-col justify-between gap-2 text-neutral-600 dark:text-neutral-400 lg:flex-row lg:items-center'>
      {children}
    </div>
  );
};

export default SectionSubHeading;
