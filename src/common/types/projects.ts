export interface ProjectItemProps {
  title: string;
  slug: string;
  description: string;
  image: string;
  link_demo?: string;
  link_github?: string;
  stacks: string;
  is_show: boolean;
  updated_at: string;
}

export interface ProjectsProps {
  projects: ProjectItemProps[];
}
