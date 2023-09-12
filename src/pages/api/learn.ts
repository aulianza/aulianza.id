import { NextApiRequest, NextApiResponse } from 'next';

import { getMdxFileCount } from '@/common/libs/mdx';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.query.slug as string;
  const count = await getMdxFileCount(slug);

  res.status(200).json({ count });
}
