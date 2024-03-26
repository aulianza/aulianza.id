import * as React from 'react'
import { MDXComponents } from '@/common/components/elements/mdx/types'
import { MDXRemoteRSC } from '@/common/components/elements/mdx/MDXRemoteRSC'
import Pre from '@/common/components/elements/mdx/elements/Pre'

type MdxProps = {
  content: string
}

const components: MDXComponents = {
  pre: Pre,
}

const Mdx = (props: MdxProps) => {
  const { content } = props

  return (
    <div className='prose w-full'>
      <MDXRemoteRSC source={content} components={components} />
    </div>
  )
}

export default Mdx
