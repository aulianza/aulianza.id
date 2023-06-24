import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import prisma from '@/common/libs/prisma';
import { ProjectItemProps } from '@/common/types/projects';
import ProjectDetail from '@/modules/projects/components/ProjectDetail';

interface ProjectsDetailPageProps {
  project: ProjectItemProps;
}

const ProjectsDetailPage: NextPage<ProjectsDetailPageProps> = ({ project }) => {
  const PAGE_TITLE = project?.title;
  const PAGE_DESCRIPTION = project?.description;

  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Projects Ryan Aulia`} />
      <Container data-aos='fade-up'>
        <BackButton url='/projects' />
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <ProjectDetail {...project} />
      </Container>
    </>
  );
};

export default ProjectsDetailPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await prisma.projects.findUnique({
    where: {
      slug: String(params?.slug),
    },
  });

  if (response === null) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: {
      project: JSON.parse(JSON.stringify(response)),
    },
  };
};

// RY: moved from SSG to SSR since data updated frequently from DB
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const response = await prisma.projects.findUnique({
//     where: {
//       slug: String(params?.slug),
//     },
//   });

//   return {
//     props: {
//       project: JSON.parse(JSON.stringify(response)),
//     },
//     revalidate: 10,
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const response = await prisma.projects.findMany();
//   const paths = response.map((project) => ({
//     params: { slug: project.slug },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
