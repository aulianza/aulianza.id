export type BlogItemProps = {
  title: string;
  category: string;
  image: string;
  views: number;
  date: string;
  content: string;
  slug: string;
};

export type BlogProps = {
  blogs: BlogItemProps[];
};