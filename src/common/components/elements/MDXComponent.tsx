/* eslint-disable unused-imports/no-unused-vars */
import { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import CodeBlock from './CodeBlock';

interface MarkdownRendererProps {
  children: string;
}

interface TableProps {
  children: ReactNode;
}

const Table = ({ children }: TableProps) => (
  <div className='table-container'>
    <table className='table w-full'>{children}</table>
  </div>
);

const MDXComponent = ({ children }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: (props) => (
          <a
            className='cursor-pointer text-teal-500 hover:text-teal-400 hover:underline'
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
            className='pt-4 text-[18px] font-medium leading-snug dark:text-neutral-300'
            {...props}
          />
        ),
        ul: ({ ordered, ...props }) => (
          <ul className='list-disc space-y-3 pb-2 pl-10' {...props} />
        ),
        ol: ({ ordered, ...props }) => (
          <ol className='list-decimal space-y-3 pb-2 pl-10' {...props} />
        ),
        code: (props) => <CodeBlock {...props} />,
        blockquote: (props) => (
          <blockquote
            className='rounded-br-2xl border-l-[5px] border-neutral-700 border-l-cyan-500 bg-neutral-200 py-3 pl-6  text-lg font-medium text-cyan-800 dark:bg-neutral-800 dark:text-cyan-200'
            {...props}
          />
        ),
        table: (props) => <Table {...props} />,
        th: (props) => (
          <th className='border px-3 py-1 text-left dark:border-neutral-600'>
            {props.children}
          </th>
        ),
        td: (props) => (
          <td className='border px-3  py-1 dark:border-neutral-600'>
            {props.children}
          </td>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default MDXComponent;
