import { NextApiRequest, NextApiResponse } from 'next';

import { getAvailableDevices } from '@/services/spotify';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await getAvailableDevices();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30',
  );

  return res.status(200).json(response?.data);
}
