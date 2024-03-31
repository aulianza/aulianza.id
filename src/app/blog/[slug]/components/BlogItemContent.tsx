import {
  BlogBlockFragmentFragment,
  BlogEntryFragmentFragment,
} from '@/__generated__/graphql'
import { TOC } from '@/common/components/elements/mdx/types'
import Mdx from '@/common/components/elements/mdx/Mdx'
import TableOfContents from '@/app/blog/[slug]/components/BlogToc'
import { BlogProgress } from '@/app/blog/[slug]/components/BlogProgress'
import Heading from '@/common/components/elements/mdx/elements/Heading'
import slugify from 'slugify'

type Props = {
  blog: BlogEntryFragmentFragment
}

// TODO: Move to file
export const BlogItemContent = (props: Props) => {
  const { blog } = props

  const blocks: BlogBlockFragmentFragment[] =
    blog.blogBlock as BlogBlockFragmentFragment[]

  const createSlug = (title: string) => {
    return slugify(title, { lower: true })
  }

  const toc: TOC[] = blocks.map((block, index) => {
    return {
      title: block.title ?? '',
      url: createSlug(block.title ?? ''),
      depth: 0,
    }
  })
  return (
    <>
      <div className='mt-8 flex flex-col justify-between lg:flex-row'>
        <article className='prose w-full lg:w-[670px]'>
          {blocks.map((block, index) => {
            return (
              <>
                <Heading id={createSlug(block.title ?? '')} as={'h2'}>
                  {block.title}
                </Heading>

                <Mdx key={index} content={block.doxterContent ?? ''} />
              </>
            )
          })}
        </article>
        <aside className='lg:min-w-[270px] lg:max-w-[270px]'>
          <div className='sticky top-24 will-change-[transform,opacity]'>
            {toc && toc.length > 0 && <TableOfContents toc={toc} />}
            {/*<LikeButton slug={slug} />*/}
          </div>
        </aside>
      </div>
      <BlogProgress />
    </>
  )
}
