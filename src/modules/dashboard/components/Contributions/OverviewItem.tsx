import React, { FC } from 'react';
import AnimateCounter from '@/common/components/elements/AnimateCounter';

interface OverviewItemProps {
  label: string;
  value: number;
  unit?: string;
}

const OverviewItem: FC<OverviewItemProps> = ({ label, value, unit = '' }) => (
  <div className='flex flex-col self-center rounded-xl bg-neutral-100 py-3 px-4 dark:bg-neutral-800'>
    <span className='text-sm dark:text-neutral-400'>{label}</span>
    <div>
      <AnimateCounter
        className='text-xl lg:text-2xl font-medium text-green-600'
        total={value}
      />
      {unit && <span className='text-sm dark:text-neutral-400'> {unit}</span>}
    </div>
  </div>
);

export default OverviewItem;
