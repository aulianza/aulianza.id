'use client'
import { ProjectEntryFragmentFragment } from '@/__generated__/graphql'
import { useState } from 'react'
import Container from '@/common/components/elements/Container'
import PageHeading from '@/common/components/elements/PageHeading'
import Projects from '@/modules/projects'

const ProjectsClientsComponent = ({
  projects,
}: {
  projects: ProjectEntryFragmentFragment[]
}) => {
  const [visibleProjects, setVisibleProjects] = useState(6)
  const loadMore = () => setVisibleProjects((prev) => prev + 2)
  const hasMore = visibleProjects < projects.length

  return (
    <>
      <Container data-aos='fade-up'>
        <PageHeading title={'Projects'} description={'Some description'} />
        <Projects
          projects={projects.slice(0, visibleProjects)}
          loadMore={loadMore}
          hasMore={hasMore}
        />
      </Container>
    </>
  )
}

export default ProjectsClientsComponent
