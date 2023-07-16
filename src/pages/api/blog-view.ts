import type { NextApiRequest, NextApiResponse } from 'next';

import { getArticleViews } from '@/services/blog';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=30'
    );

    const { id } = req.query;

    const response = await getArticleViews({
      id: Number(id),
    });

    // TODO: sum view from dev.to with own prisma db here.

    res.status(200).json({ status: true, data: response.data });
  } catch (error) {
    res.status(200).json({ status: false, error });
  }
}
