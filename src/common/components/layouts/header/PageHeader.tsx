import Mdx from '@/common/components/elements/mdx/Mdx'

interface Props {
  title: string
  description: string
}

export const PageHeader = ({ title, description }: Props) => {
  return (
    <div className='mb-16 mt-6 sm:mb-24 sm:mt-12'>
      <h1 className='my-4 text-4xl font-bold md:text-5xl'>{title}</h1>
      <div className='mb-8 text-muted-foreground'>
        <Mdx content={description} />
      </div>
      <div
        className={
          'absolute inset-x-0 h-px w-full shrink-0 translate-y-2 bg-border sm:translate-y-6'
        }
      />
    </div>
  )
}
