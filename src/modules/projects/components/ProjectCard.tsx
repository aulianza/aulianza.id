import Link from 'next/link'
import { AiFillPushpin as PinIcon } from 'react-icons/ai'
import { HiOutlineArrowSmRight as ViewIcon } from 'react-icons/hi'

import Card from '@/common/components/elements/Card'
import Image from '@/common/components/elements/Image'
import { ProjectEntryFragmentFragment } from '@/__generated__/graphql'

const ProjectCard = ({
  project,
}: {
  project: ProjectEntryFragmentFragment
}) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card className='group relative cursor-pointer border border-neutral-200 dark:border-neutral-900 lg:hover:scale-[102%]'>
        {project.projectFeatured && (
          <div className='absolute right-0 top-0 z-[2] flex items-center gap-1 rounded-bl-xl rounded-tr-xl bg-lime-300 px-2 py-1 text-[13px] font-medium text-emerald-950'>
            <PinIcon size={15} />
            <span>Featured</span>
          </div>
        )}
        <div className='relative'>
          <Image
            src={project.projectHeaderImage[0]?.url!}
            width={400}
            height={200}
            alt={project.title}
            className='h-48 rounded-t-xl object-cover object-left'
          />
          <div className='absolute left-0 top-0 flex flex h-full w-full items-center justify-center gap-1 rounded-t-xl bg-black text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-80'>
            <span>View Project</span>
            <ViewIcon size={20} />
          </div>
        </div>
        <div className='space-y-2 p-5'>
          <div className='flex justify-between'>
            <div className='cursor-pointer font-sora text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:group-hover:text-teal-400 lg:group-hover:text-teal-600'>
              {project.title}
            </div>
          </div>
          <p className='text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-400'>
            Todo
          </p>
          <div className='flex flex-wrap items-center gap-3 pt-2'>
            {/*{stacksArray?.map((stack: string, index: number) => (*/}
            {/*  <div key={index}>*/}
            {/*    <Tooltip title={stack}>{STACKS[stack]}</Tooltip>*/}
            {/*  </div>*/}
            {/*))}*/}
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default ProjectCard
