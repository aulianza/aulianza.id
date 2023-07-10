import MDXComponent from '@/common/components/elements/MDXComponent';

interface ContentDetailProps {
  content: string;
}

const ContentDetail = ({ content }: ContentDetailProps) => {
  return (
    <div className='space-y-6 leading-[1.8] dark:text-neutral-300 mt-5'>
      <MDXComponent>{content}</MDXComponent>
    </div>
  );
};

export default ContentDetail;
