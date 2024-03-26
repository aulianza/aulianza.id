import {
  ProjectDetailFragmentFragment,
  ProjectEntryStackCategoryFragmentFragment,
} from '@/__generated__/graphql'
import Image from '@/common/components/elements/Image'
import MDXComponent from '@/common/components/elements/MDXComponent'
import Tooltip from '@/common/components/elements/Tooltip'
import { getStackIcon } from '@/common/constant/stacks'

import ProjectLink from './ProjectLink'

const ProjectDetail = ({
  project,
}: {
  project: ProjectDetailFragmentFragment
}) => {
  const stacks: ProjectEntryStackCategoryFragmentFragment[] = (project.stacks ||
    []) as ProjectEntryStackCategoryFragmentFragment[]

  const image = project.projectHeaderImage[0]?.url!
  return (
    <div className='space-y-8'>
      <div className='flex flex-col items-start justify-between gap-5 sm:flex-row lg:flex-row lg:items-center'>
        <div className='flex flex-wrap items-center gap-2'>
          <span className='mb-1 text-[15px] text-neutral-700 dark:text-neutral-300'>
            Tech Stack :
          </span>
          <div className='flex flex-wrap items-center gap-3'>
            {stacks.map((stack) => (
              <div key={stack.id}>
                <Tooltip title={stack.title!}>
                  {getStackIcon(stack.stackHandle!)}
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
        <ProjectLink
          title={project.title}
          link_demo={project.projectLiveDemoLink}
          link_github={project.projectSourcecodeRepositoryLink}
        />
      </div>
      <Image
        src={image}
        width={800}
        height={400}
        alt={project.title!}
        className='hover:scale-105'
      />
      {project.projectInformation && (
        <div className='mt-5 space-y-6 leading-[1.8] dark:text-neutral-300'>
          <MDXComponent>{project.projectInformation}</MDXComponent>
        </div>
      )}
    </div>
  )
}

export default ProjectDetail
