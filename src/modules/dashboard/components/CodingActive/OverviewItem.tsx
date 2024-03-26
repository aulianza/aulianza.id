import Card from '@/common/components/elements/Card'

interface OverviewItemProps {
  label: string
  value: string
}

const OverviewItem = ({ label, value }: OverviewItemProps) => (
  <Card className='flex flex-col space-y-1 rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-900 sm:col-span-1'>
    <span className='text-sm dark:text-neutral-400'>{label}</span>
    <span>{value || '-'}</span>
  </Card>
)

export default OverviewItem
