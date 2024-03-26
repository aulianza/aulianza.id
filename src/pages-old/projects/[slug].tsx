import { GetServerSideProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { ProjectDetailFragmentFragment } from '@/__generated__/graphql'
import BackButton from '@/common/components/elements/BackButton'
import Container from '@/common/components/elements/Container'
import PageHeading from '@/common/components/elements/PageHeading'
import { ProjectItemProps } from '@/common/types/projects'
import ProjectDetail from '@/modules/projects/components/ProjectDetail'
import { getProjectDetailDocument } from '@/services/graphql/documents'
import { client } from '@/services/graphql/graphql'

interface ProjectsDetailPageProps {
  projectOld: ProjectItemProps
  project: ProjectDetailFragmentFragment
}

const ProjectsDetailPage: NextPage<ProjectsDetailPageProps> = ({ project }) => {
  const PAGE_TITLE = project.title!
  const PAGE_DESCRIPTION = project.projectDescription!

  const canonicalUrl = `https://aulianza.id/project/${project.slug}`

  const image = project.projectHeaderImage[0]?.url ?? ''

  return (
    <>
      <NextSeo
        title={`${project?.title} - Project Ryan Aulia`}
        description={PAGE_DESCRIPTION!}
        canonical={canonicalUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: project?.dateCreated,
            modifiedTime: project?.dateUpdated,
            authors: ['Thijmen Stavenuiter'],
          },
          url: canonicalUrl,
          images: [
            {
              url: image,
            },
          ],
          siteName: 'Blog Thijmen.dev',
        }}
      />
      <Container data-aos='fade-up'>
        <BackButton url='/projects' />
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <ProjectDetail project={project} />
      </Container>
    </>
  )
}

export default ProjectsDetailPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data = await client.query({
    query: getProjectDetailDocument,
    variables: {
      slug: params?.slug,
    },
  })

  if (data.data.projectsEntries.length == 0) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  const project = data.data.projectsEntries[0]

  return {
    props: {
      project,
    },
  }
}

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
