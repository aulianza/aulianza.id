import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import CodeBlock from './CodeBlock';

interface MarkdownRendererProps {
  children: string;
}

const MarkdownRenderer = ({ children }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: (props) => (
          <a
            className='text-teal-500 hover:text-teal-400 hover:underline cursor-pointer'
            {...props}
          />
        ),
        p: (props) => <div {...props} />,
        h2: (props) => (
          <h2
            className='text-xl font-medium dark:text-neutral-300'
            {...props}
          />
        ),
        h3: (props) => (
          <h3
            className='text-[18px] leading-snug pt-4 font-medium dark:text-neutral-300'
            {...props}
          />
        ),
        ol: (props) => (
          <ol className='pl-10 space-y-3 list-decimal pb-5' {...props} />
        ),
        code: (props) => <CodeBlock {...props} />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
