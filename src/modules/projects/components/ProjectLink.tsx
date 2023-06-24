import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { BsGithub as GithubIcon } from 'react-icons/bs';
import { FiExternalLink as LinkIcon } from 'react-icons/fi';

interface LinkComponentProps {
  url: string;
  text: string;
  icon?: ReactNode;
}

interface ProjectLinkProps {
  link_github?: string;
  link_demo?: string;
}

const ProjectLink: FC<ProjectLinkProps> = ({ link_github, link_demo }) => {
  const LinkComponent = ({ url, text, icon }: LinkComponentProps) => {
    return (
      <Link href={url} target='_blank' passHref>
        <div className='flex gap-2 items-center font-medium text-neutral-700 dark:text-neutral-300 '>
          {icon}
          <span className='text-[15px] dark:text-teal-500 hover:dark:text-teal-400 transition-all duration-300'>
            {text}
          </span>
        </div>
      </Link>
    );
  };

  return (
    <div className='flex gap-4'>
      {link_github && (
        <LinkComponent
          url={link_github}
          text='Source Code'
          icon={<GithubIcon size={22} />}
        />
      )}
      {link_github && link_demo && (
        <span className='text-neutral-400 dark:text-neutral-600'>|</span>
      )}
      {link_demo && (
        <LinkComponent
          url={link_demo}
          text='Live Demo'
          icon={<LinkIcon size={22} />}
        />
      )}
    </div>
  );
};

export default ProjectLink;
