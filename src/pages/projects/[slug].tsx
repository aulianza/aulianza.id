import React from "react";
import prisma from "@/common/lib/prisma";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import ProjectDetail from "@/modules/projects/components/ProjectDetail";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";

import { ProjectItemProps } from "@/common/types/projects";

interface ProjectsDetailPageProps {
  project: ProjectItemProps;
}

const ProjectsDetailPage: NextPage<ProjectsDetailPageProps> = ({ project }) => {
  console.log("🚀 aulianza ~ project => ", project);

  const PAGE_TITLE = project?.title;
  const PAGE_DESCRIPTION = project?.description;

  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Projects Ryan Aulia`} />
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <ProjectDetail {...project} />
      </Container>
    </>
  );
};

export default ProjectsDetailPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await prisma.projects.findUnique({
    where: {
      slug: String(params?.slug),
    },
  });

  return {
    props: {
      project: JSON.parse(JSON.stringify(response)),
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await prisma.projects.findMany();
  const paths = response.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
