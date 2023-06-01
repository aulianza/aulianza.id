import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import BlogDetail from "@/modules/blog/components/BlogDetail";

import BackButton from "@/common/components/elements/BackButton";
import Container from "@/common/components/elements/Container";
import Loading from "@/common/components/elements/Loading";

import { BlogItemProps } from "@/common/types/blog";

import useLoading from "@/common/hooks/use-loading";
import { getBlogDetail } from "@/services/blog";

interface BlogDetailPageProps {
  blog: {
    data: BlogItemProps;
  };
}

const ProjectsDetailPage: NextPage<BlogDetailPageProps> = ({ blog }) => {
  const isLoading = useLoading();

  const blogData = blog?.data || {};

  const PAGE_TITLE = blogData?.title;

  if (isLoading) return <Loading />;

  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Blog Ryan Aulia`} />
      <Container data-aos="fade-up">
        <BackButton url="/blog" />
        <BlogDetail {...blogData} />
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
        destination: "/",
        permanent: false,
      },
    };
  }

  const blogDetail = await getBlogDetail({ id: parseInt(blogId) });

  return {
    props: {
      blog: blogDetail,
    },
  };
};
