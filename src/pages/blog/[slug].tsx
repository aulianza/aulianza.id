import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import { Tab, Tabs } from '@/common/components/elements/Tabs';
import { formatBlogSlug } from '@/common/helpers';
import { BlogDetailProps } from '@/common/types/blog';
import BlogDetail from '@/modules/blog/components/BlogDetail';
import CommentList from '@/modules/blog/components/CommentList';
import GiscusComment from '@/modules/blog/components/GiscusComment';
import { getBlogDetail } from '@/services/blog';

interface BlogDetailPageProps {
  blog: {
    data: BlogDetailProps;
  };
}

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ blog }) => {
  const blogData = blog?.data || {};

  const newSlug = formatBlogSlug(blogData.slug);
  const slug = `blog/${newSlug}?id=${blogData?.id}`;

  const canonicalUrl = `https://aulianza.id/${slug}`;

  blogData.blog_slug = slug;

  const incrementViews = async () => {
    try {
      await axios.post(`/api/views?id=${blogData?.id}&slug=${slug}`);
    } catch (error) {
      // console.error('Failed to update views count:', error);
    }
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      incrementViews();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NextSeo
        title={`${blogData?.title} - Blog Ryan Aulia`}
        description={blogData?.description}
        canonical={canonicalUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: blogData?.published_at,
            modifiedTime: blogData?.published_at,
            authors: ['Ryan Aulia'],
          },
          url: canonicalUrl,
          images: [
            {
              url: blogData?.cover_image,
            },
          ],
          siteName: 'Blog Ryan Aulia',
        }}
      />
      <Container data-aos='fade-up'>
        <BackButton url='/blog' />
        <BlogDetail {...blogData} />
        <section id='comments'>
          <Tabs>
            <Tab label='DEV.to Comment'>
              <div className='my-2 items-center text-sm mb-3'>
                <span className='font-medium text-neutral-600 dark:text-neutral-300'>
                  Post URL:{' '}
                </span>
                <Link
                  href={blogData?.url}
                  target='_blank'
                  data-umami-event={`Click DEV.to URL - ${blogData?.title}`}
                >
                  <div className='text-teal-600 dark:text-teal-500 hover:underline mt-1'>
                    {blogData?.url}
                  </div>
                </Link>
              </div>
              <CommentList
                id={blogData?.id}
                totalComments={blogData?.comments_count}
              />
            </Tab>
            <Tab label='Github Comment'>
              <GiscusComment isEnableReaction={true} />
            </Tab>
          </Tabs>
        </section>
      </Container>
    </>
  );
};

export default BlogDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const blogId = context.query?.id as string;

  if (!blogId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const response = await getBlogDetail({ id: parseInt(blogId) });

  if (
    response?.status === 404 ||
    response?.data?.user?.username !== 'aulianza'
  ) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: {
      blog: response,
    },
  };
};
