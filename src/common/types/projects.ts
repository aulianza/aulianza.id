export interface ProjectItemProps {
  title: string;
  slug: string;
  description: string;
  image: string;
  link_demo?: string;
  link_github?: string;
  stacks: string;
  content?: string;
  is_show: boolean;
  is_featured: boolean;
  updated_at: Date;
}

export interface ProjectsProps {
  projects: ProjectItemProps[];
}
