import MDXComponent from '@/common/components/elements/MDXComponent';

interface ContentBodyProps {
  content: string;
}

const ContentBody = ({ content }: ContentBodyProps) => {
  return (
    <div className='mt-5 space-y-5 leading-[1.8] dark:text-neutral-300'>
      <MDXComponent>{content}</MDXComponent>
    </div>
  );
};

export default ContentBody;
