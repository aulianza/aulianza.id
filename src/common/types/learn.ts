export interface ContentLanguage {
  id: string;
  title: string;
}

export interface ContentProps {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  is_new: boolean;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  is_show: boolean;
}

export interface SubContentProps {
  parent: string;
  contentSlug: string;
  subContentSlug: string;
  title: string;
  language?: string;
  difficulty?: string;
}

export interface SubContentMetaProps {
  id: number;
  title: string;
  category: string;
  language?: string;
  difficulty?: string;
  source?: string;
  cover_url?: string;
  source_url?: string;
  created_at: string;
  updated_at: string;
}

export interface MdxFileContentProps {
  slug: string;
  frontMatter: SubContentMetaProps;
  content: string;
}
