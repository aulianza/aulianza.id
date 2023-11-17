import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import { formatExcerpt } from '@/common/helpers';
import { BlogDetailProps } from '@/common/types/blog';
import BlogDetail from '@/modules/blog/components/BlogDetail';
import { getBlogList } from '@/services/blog';

const GiscusComment = dynamic(
  () => import('@/modules/blog/components/GiscusComment')
);

interface BlogDetailPageProps {
  blog: {
    data: {
      posts: BlogDetailProps[];
    };
  };
}

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ blog }) => {
  const blogData = blog?.data?.posts?.[0] || {};

  const slug = `blog/${blogData?.slug}`;
  const canonicalUrl = `https://aulianza.id/${slug}`;
  const description = formatExcerpt(blogData?.excerpt?.rendered);

  return (
    <>
      <NextSeo
        title={`${blogData?.title?.rendered} - Blog Ryan Aulia`}
        description={description}
        canonical={canonicalUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: blogData?.date,
            modifiedTime: blogData?.date,
            authors: ['Ryan Aulia', 'aulianza'],
          },
          url: canonicalUrl,
          images: [
            {
              url: blogData?.featured_image_url,
            },
          ],
          siteName: 'aulianza blog',
        }}
      />
      <Container data-aos='fade-up'>
        <BackButton url='/blog' />
        <BlogDetail {...blogData} />
        <section id='comments'>
          <GiscusComment />
        </section>
      </Container>
    </>
  );
};

export default BlogDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const allBlogPosts = await getBlogList({ page: 1, per_page: 100 });
  const paths = allBlogPosts?.data?.posts?.map((post: BlogDetailProps) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogSlug = context.params?.slug as string;

  if (!blogSlug) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const response = await getBlogList({ slug: blogSlug });

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
    revalidate: 3600,
  };
};
