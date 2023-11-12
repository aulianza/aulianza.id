import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import { BlogDetailProps } from '@/common/types/blog';
import BlogDetail from '@/modules/blog/components/BlogDetail';
import { getBlogDetail } from '@/services/blog';

const GiscusComment = dynamic(
  () => import('@/modules/blog/components/GiscusComment')
);

interface BlogDetailPageProps {
  blog: {
    data: BlogDetailProps;
  };
}

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ blog }) => {
  const blogData = blog?.data || {};

  const slug = `blog/${blogData?.slug}?id=${blogData?.id}`;
  const canonicalUrl = `https://aulianza.id/${slug}`;

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
        title={`${blogData?.title?.rendered} - Blog Ryan Aulia`}
        description={blogData?.excerpt?.rendered}
        canonical={canonicalUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: blogData?.date,
            modifiedTime: blogData?.date,
            authors: ['Ryan Aulia'],
          },
          url: canonicalUrl,
          images: [
            {
              url: blogData?.featured_image_url,
            },
          ],
          siteName: 'Blog Ryan Aulia',
        }}
      />
      <Container data-aos='fade-up'>
        <BackButton url='/blog' />
        <BlogDetail {...blogData} />
        <section id='comments'>
          <GiscusComment isEnableReaction={false} />
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

  const response = await getBlogDetail(parseInt(blogId));

  if (response?.status === 404) {
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
