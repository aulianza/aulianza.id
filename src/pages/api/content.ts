import { NextApiRequest, NextApiResponse } from 'next';

import { loadMdxFiles } from '@/common/libs/mdx';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { category } = req.query;
  const contentList = await loadMdxFiles(category as string);

  const data = contentList.map((item) => ({
    id: item?.frontMatter?.id,
    parent_slug: category || '',
    slug: item.slug || '',
    title: item.frontMatter.title || '',
  }));

  const response = { data };

  res.status(200).json(response);
}
