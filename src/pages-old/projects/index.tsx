import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useState } from 'react'

import { ProjectEntryFragmentFragment } from '@/__generated__/graphql'
import Container from '@/common/components/elements/Container'
import PageHeading from '@/common/components/elements/PageHeading'
import Projects from '@/modules/projects'
import { getProjectsDocument } from '@/services/graphql/documents'
import { client } from '@/services/graphql/graphql'

interface ProjectsPageProps {
  dataProjects: ProjectEntryFragmentFragment[]
}

const PAGE_TITLE = 'Projects'
const PAGE_DESCRIPTION =
  'Several projects that I have worked on, both private and open source.'

const ProjectsPage: NextPage<ProjectsPageProps> = ({ dataProjects }) => {
  const projects = dataProjects ?? []

  const [visibleProjects, setVisibleProjects] = useState(6)
  const loadMore = () => setVisibleProjects((prev) => prev + 2)
  const hasMore = visibleProjects < projects.length

  console.log(projects)
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Ryan Aulia`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects
          projects={projects.slice(0, visibleProjects)}
          loadMore={loadMore}
          hasMore={hasMore}
        />
      </Container>
    </>
  )
}

export default ProjectsPage

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.query({ query: getProjectsDocument })

  return {
    props: {
      dataProjects: data.data.projectsEntries,
    },
    revalidate: 1,
  }
}
