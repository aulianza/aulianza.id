import React, { FC } from 'react';

interface OverviewItemProps {
  label: string;
  value: string;
}

const OverviewItem: FC<OverviewItemProps> = ({ label, value }) => (
  <div className='flex flex-col rounded-xl bg-neutral-100 py-3 px-4 dark:bg-neutral-800 sm:col-span-1 space-y-1'>
    <span className='text-sm dark:text-neutral-400'>{label}</span>
    <span>{value}</span>
  </div>
);

export default OverviewItem;
