export interface ProjectItemProps {
  title: string;
  slug: string;
  description: string;
  image: string;
  links: {
    demo?: string;
    github?: string;
  };
  stacks: string[];
}

export interface ProjectsProps {
  projects: ProjectItemProps[];
}
