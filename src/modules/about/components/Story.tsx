import { ABOUT } from '@/common/constant/about';

const Story = () => {
  return (
    <section
      className='space-y-4 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'
      dangerouslySetInnerHTML={{ __html: ABOUT }}
    />
  );
};

export default Story;
