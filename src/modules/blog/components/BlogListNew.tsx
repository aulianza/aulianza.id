'use client'
import BlogFeaturedSection from './BlogFeaturedSection'
import { BlogOverviewEntryFragmentFragment } from '@/__generated__/graphql'
import { motion } from 'framer-motion'
import React from 'react'
import BlogCardNew from '@/modules/blog/components/BlogCardNew'
import { PageHeader } from '@/common/components/layouts/header/PageHeader'

interface Props {
  blogs: BlogOverviewEntryFragmentFragment[]
}

const BlogListNew = (props: Props) => {
  //const [page, setPage] = useState<number>(1)
  //const [searchTerm, setSearchTerm] = useState<string>('')
  //const router = useRouter()

  //const debouncedSearchTerm = useDebounce(searchTerm, 500)

  // @TODO: Implement pagination somewhere in the future

  // const handlePageChange = async (newPage: number) => {
  //   router.push(
  //     {
  //       pathname: '/blog',
  //       query: { page: newPage, search: debouncedSearchTerm },
  //     },
  //     undefined,
  //     { shallow: true },
  //   )
  //   setPage(newPage)
  // }

  // @TODO: Implement search functionality somewhere in the future
  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const searchValue = event?.target?.value
  //   setSearchTerm(searchValue)
  //   setPage(1)
  //
  //   router.push(
  //     {
  //       pathname: '/blog',
  //       query: searchValue ? { page: 1, search: searchValue } : { page: 1 },
  //     },
  //     undefined,
  //     { shallow: true },
  //   )
  // }

  // @TODO: Implement clear search functionality somewhere in the future
  // const handleClearSearch = () => {
  //   setSearchTerm('')
  //   setPage(1)
  //
  //   router.push(
  //     {
  //       pathname: '/blog',
  //       query: { page: 1 },
  //     },
  //     undefined,
  //     { shallow: true },
  //   )
  // }

  // useEffect(() => {
  //   const queryPage = Number(router.query.page)
  //   if (!isNaN(queryPage) && queryPage !== page) {
  //     setPage(queryPage)
  //   }
  // }, [page, router.query.page, searchTerm])

  // const renderEmptyState = () =>
  //   !isValidating &&
  //   (!data?.status || blogData.length === 0) && (
  //     <EmptyState message={error ? 'Error loading posts' : 'No Post Found.'} />
  //   )

  const total_posts = props.blogs.length

  const featuredBlogs = [...props.blogs].filter((blog) => blog.isFeatured)

  return (
    <div className='space-y-10'>
      <PageHeader title={'Blog'} description={'Welcome to my blog'} />
      <BlogFeaturedSection featuredBlogs={featuredBlogs} />

      <div className='space-y-5'>
        <div className='mb-6 flex flex-col items-center justify-between gap-3 sm:flex-row'>
          <div className='flex items-center gap-2 px-1 font-sora text-xl font-medium'>
            {/*{searchTerm ? (*/}
            {/*  <div>*/}
            {/*    <span className='mr-2 text-neutral-600 dark:text-neutral-400'>*/}
            {/*      Search:*/}
            {/*    </span>*/}
            {/*    <span className='italic'>{searchTerm}</span>*/}
            {/*  </div>*/}
            {/*) : (*/}
            <h4 className='text-neutral-800 dark:text-neutral-200'>
              Latest Articles
            </h4>
            {/*)}*/}
            <span className='rounded-full bg-neutral-300 px-2 py-1 font-sora text-xs text-neutral-900 dark:bg-neutral-700 dark:text-neutral-50'>
              {total_posts}
            </span>
          </div>
          {/*<SearchBar*/}
          {/*  searchTerm={searchTerm}*/}
          {/*  onSearchChange={handleSearch}*/}
          {/*  onClearSearch={handleClearSearch}*/}
          {/*/>*/}
        </div>

        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
          {/*{!isValidating ? (*/}
          {/*  <>*/}
          {props.blogs.map(
            (item: BlogOverviewEntryFragmentFragment, index: number) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <BlogCardNew blogItem={item} />
              </motion.div>
            ),
          )}
          {/*  </>*/}
          {/*) : (*/}
          {/*<>*/}
          {/*  {new Array(3).fill(0).map((_, index) => (*/}
          {/*    <BlogCardNewSkeleton key={index} />*/}
          {/*  ))}*/}
          {/*</>*/}
          {/*)}*/}
        </div>

        {/*{!isValidating && data?.status && (*/}
        {/*  <Pagination*/}
        {/*    totalPages={totalPages}*/}
        {/*    currentPage={page}*/}
        {/*    onPageChange={handlePageChange}*/}
        {/*  />*/}
        {/*)}*/}

        {/*{renderEmptyState()}*/}
      </div>
    </div>
  )
}

export default BlogListNew
