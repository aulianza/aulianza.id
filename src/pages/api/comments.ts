import type { NextApiRequest, NextApiResponse } from 'next';

import { getBlogComment } from '@/services/devto';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=30'
    );

    const { post_id } = req.query;

    const response = await getBlogComment({
      post_id: String(post_id),
    });

    res.status(200).json({ status: true, data: response.data });
  } catch (error) {
    res.status(200).json({ status: false, error });
  }
}
