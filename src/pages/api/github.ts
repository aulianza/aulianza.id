import { NextApiRequest, NextApiResponse } from 'next';

import { getGithubUser } from '@/services/github';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queryParams = req.query;

  let type = '';

  if (typeof queryParams.type === 'string') {
    type = queryParams.type;
  } else if (Array.isArray(queryParams.type)) {
    type = queryParams.type[0];
  }

  const response = await getGithubUser(type);

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  );

  return res.status(response.status).json(response.data);
}
