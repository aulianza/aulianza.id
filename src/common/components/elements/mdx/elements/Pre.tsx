'use client'

import {
  SiJavascript,
  SiReact,
  SiTypescript,
} from '@icons-pack/react-simple-icons'

import { CheckIcon, CopyIcon, FileIcon, TerminalIcon } from 'lucide-react'
import * as React from 'react'
import { Button, ButtonProps } from '@/common/components/elements/mdx/ui/button'
import { ScrollArea } from '@/common/components/elements/mdx/ui/scroll-area'
import cn from '@/common/libs/cn'

type PreProps = {
  'data-lang'?: string
} & React.ComponentPropsWithoutRef<'pre'>
type CopyButtonProps = {
  text: string
} & ButtonProps

const getLanguageIcon = (lang: string): React.ReactNode => {
  switch (lang) {
    case 'js': {
      // @ts-ignore
      return <SiJavascript className='size-3.5' />
    }

    case 'ts': {
      // @ts-ignore
      return <SiTypescript className='size-3.5' />
    }

    case 'jsx':
    case 'tsx': {
      // @ts-ignore
      return <SiReact className='size-3.5' />
    }

    case 'bash':
    case 'sh':
    case 'shell':
    case 'zsh': {
      return <TerminalIcon className='size-3.5' />
    }

    default: {
      return <FileIcon className='size-3.5' />
    }
  }
}

const Pre = (props: PreProps) => {
  const { children, className, title, 'data-lang': lang, ...rest } = props

  const textInput = React.useRef<HTMLPreElement>(null)
  const [text, setText] = React.useState<string>('')

  React.useEffect(() => {
    if (textInput.current) {
      setText(textInput.current.textContent ?? '')
    }
  }, [])

  return (
    <figure className='not-prose group relative my-6 overflow-hidden rounded-lg border bg-secondary/50 text-sm'>
      {title ? (
        <div className='flex flex-row items-center gap-2 border-b bg-muted px-4 py-1.5'>
          {lang && (
            <div className='text-muted-foreground'>{getLanguageIcon(lang)}</div>
          )}
          <figcaption className='flex-1 truncate text-muted-foreground'>
            {title}
          </figcaption>
          <CopyButton text={text} />
        </div>
      ) : (
        <CopyButton className='absolute right-4 top-3 z-10' text={text} />
      )}

      <ScrollArea>
        <pre ref={textInput} className={cn('py-4', className)} {...rest}>
          {children}
        </pre>
      </ScrollArea>
    </figure>
  )
}

const CopyButton = (props: CopyButtonProps) => {
  const { text, className, ...rest } = props
  // const [copy, isCopied] = useCopyToClipboard()
  const isCopied = false
  return (
    <Button
      className={cn(
        'size-8 p-0 opacity-0 transition-opacity group-hover:opacity-100',
        className,
      )}
      variant='outline'
      onClick={() => alert(text)}
      type='button'
      aria-label='Copy code to clipboard'
      {...rest}
    >
      {isCopied ? (
        <CheckIcon className='size-4' />
      ) : (
        <CopyIcon className='size-4' />
      )}
    </Button>
  )
}

export default Pre
