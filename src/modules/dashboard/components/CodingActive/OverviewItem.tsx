import Card from '@/common/components/elements/Card';

interface OverviewItemProps {
  label: string;
  value: string;
}

const OverviewItem = ({ label, value }: OverviewItemProps) => (
  <Card className='flex flex-col rounded-xl bg-neutral-100 py-3 px-4 sm:col-span-1 space-y-1 border border-neutral-200 dark:border-neutral-900'>
    <span className='text-sm dark:text-neutral-400'>{label}</span>
    <span>{value}</span>
  </Card>
);

export default OverviewItem;
