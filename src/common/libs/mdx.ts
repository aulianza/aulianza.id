import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';

interface MdxFileProps {
  slug: string;
  frontMatter: Record<string, unknown>;
  content: string;
}

export const loadMdxFiles = (slug: string): MdxFileProps[] => {
  const dirPath = path.join(process.cwd(), 'src', 'contents', 'learn', slug);

  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const files = fs.readdirSync(dirPath);

  const contents = files.map((file) => {
    const filePath = path.join(dirPath, file);
    const source = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(source);

    const mdxCompiler = remark().use(remarkParse).use(remarkGfm).use(remarkMdx);
    const mdxContent = mdxCompiler.processSync(content).toString();

    return {
      slug: file.replace('.mdx', ''),
      frontMatter: data,
      content: mdxContent,
    };
  });

  return contents;
};

export const getMdxFileCount = (slug: string) => {
  const dirPath = path.join(process.cwd(), 'src', 'contents', 'learn', slug);
  const files = fs.readdirSync(dirPath);
  const mdxFiles = files.filter((file) => file.endsWith('.mdx'));
  return mdxFiles.length;
};
