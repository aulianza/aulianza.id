import { NextApiRequest, NextApiResponse } from 'next';

import { getNowPlaying } from '@/services/spotify';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await getNowPlaying();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30',
  );

  return res.status(200).json(response?.data);
}
