import React, { FC, ReactNode } from 'react';
import Icon from 'supercons';

interface SectionHeadingProps {
  title: string;
  icon?: ReactNode;
}

const SectionHeading: FC<SectionHeadingProps> = ({ title, icon }) => {
  return (
    <div className='flex items-center gap-1 text-xl font-medium text-neutral-800 dark:text-neutral-300'>
      {icon && <>{icon}</>}
      <h2 className='capitalize'>{title}</h2>
    </div>
  );
};

export default SectionHeading;
