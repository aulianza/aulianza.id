import React, { useEffect, useState } from 'react';
import { CodeProps } from 'react-markdown/lib/ast-to-react';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useCopyToClipboard } from 'usehooks-ts';
import {
  HiOutlineClipboardCopy as CopyIcon,
  HiCheckCircle as CheckIcon,
} from 'react-icons/hi';

import { a11yDark as themeColor } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);

const CodeBlock = ({ className, children, inline, ...props }: CodeProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [value, copy] = useCopyToClipboard();
  const match = /language-(\w+)/.exec(className || '');

  const handleCopy = (code: string) => {
    copy(code);
    setIsCopied(true);
  };

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  return (
    <>
      {!inline ? (
        <div className='relative'>
          <button
            className='absolute top-3 right-3 p-2 border border-neutral-700 rounded-lg hover:bg-neutral-800'
            type='button'
            aria-label='Copy to Clipboard'
            onClick={() => handleCopy(children.toString())}
          >
            {!isCopied ? (
              <CopyIcon size={18} className='text-neutral-400' />
            ) : (
              <CheckIcon size={18} className='text-green-600' />
            )}
          </button>

          <SyntaxHighlighter
            {...props}
            style={themeColor}
            customStyle={{
              padding: '20px',
              fontSize: '14px',
              borderRadius: '8px',
            }}
            PreTag='div'
            language={match ? match[1] : 'javascript'}
            wrapLongLines={true}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code className='text-neutral-950 bg-neutral-200 dark:text-neutral-200 dark:bg-neutral-700 py-1 px-2 rounded-md text-[14px]'>
          {children}
        </code>
      )}
    </>
  );
};

export default CodeBlock;
