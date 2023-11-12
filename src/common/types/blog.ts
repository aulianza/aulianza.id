export type UserProps = {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  user_id: number;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
};

export type BlogItemProps = {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    markdown: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: {
    footnotes: string;
  };
  categories: number[];
  tags: number[];
  tags_list: {
    term_id: number;
    name: string;
    slug: string;
    term_group: number;
    term_taxonomy_id: number;
    taxonomy: string;
    description: string;
    parent: number;
    count: number;
    filter: string;
  }[];
  amp_enabled: boolean;
  featured_image_url: string;
  total_views_count: number;
};

export type BlogDetailProps = {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    markdown: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: {
    footnotes: string;
  };
  categories: number[];
  tags: number[];
  tags_list: {
    term_id: number;
    name: string;
    slug: string;
    term_group: number;
    term_taxonomy_id: number;
    taxonomy: string;
    description: string;
    parent: number;
    count: number;
    filter: string;
  }[];
  amp_enabled: boolean;
  featured_image_url: string;
  guid: {
    rendered: string;
  };
  replies: {
    embeddable: true;
    href: string;
  };
  version_history: {
    count: number;
    href: string;
  };
  predecessor_version: {
    id: number;
    href: string;
  };
  wp_featuredmedia: {
    embeddable: true;
    href: string;
  };
  wp_attachment: {
    href: string;
  };
  wp_term: {
    taxonomy: string;
    embeddable: true;
    href: string;
  }[];
  curies: {
    name: string;
    href: string;
    templated: true;
  }[];
  total_views_count: number;
};

export type BlogProps = {
  blogs: BlogItemProps[];
};

export type BlogFeaturedProps = {
  data: BlogItemProps[];
};

export type CommentItemProps = {
  type_of: string;
  id_code: string;
  created_at: string;
  body_html: string;
  user: UserProps;
  children: Comment[];
};
