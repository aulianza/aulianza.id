import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import BlogDetail from '@/modules/blog/components/BlogDetail';
import GiscusComment from '@/modules/blog/components/GiscusComment';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';

import { BlogItemProps } from '@/common/types/blog';

import { getBlogDetail } from '@/services/blog';
import CommentList from '@/modules/blog/components/CommentList';
import { Tabs, Tab } from '@/common/components/elements/Tabs';

interface BlogDetailPageProps {
  blog: {
    data: BlogItemProps;
  };
}

const ProjectsDetailPage: NextPage<BlogDetailPageProps> = ({ blog }) => {
  const blogData = blog?.data || {};

  const canonicalUrl = `https://aulianza.id/blog/${blogData?.slug}?id=${blogData?.id}`;

  const repo = process.env.COMMENTS_REPO as `${string}/${string}`;
  const repoId = process.env.COMMENTS_REPO_ID as string;
  const category = process.env.COMMENTS_CATEGORY as string;
  const categoryId = process.env.COMMENTS_CATEGORY_ID as string;

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
            modifiedTime: blogData?.edited_at,
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
              <CommentList id={blogData?.id} />
            </Tab>
            <Tab label='Github Comment'>
              <GiscusComment
                repo={repo}
                repoId={repoId}
                category={category}
                categoryId={categoryId}
              />
            </Tab>
          </Tabs>
        </section>
      </Container>
    </>
  );
};

export default ProjectsDetailPage;

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
