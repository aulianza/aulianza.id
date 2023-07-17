import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/common/libs/prisma';
import { getBlogViews } from '@/services/blog';

interface ResponseData {
  views: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, slug } = req.query;

  if (req.method === 'GET') {
    try {
      const contentMeta = await prisma.contentMeta.findUnique({
        where: { slug: slug as string },
        select: { views: true },
      });

      let devToViewsCount = 0;
      if (id) {
        const devtoViews = await getBlogViews({
          id: Number(id),
        });
        devToViewsCount = devtoViews?.data?.page_views_count ?? 0;
      }

      const contentViewsCount = contentMeta?.views ?? 0;

      const response: ResponseData = {
        views: contentViewsCount + devToViewsCount,
      };

      return res.json(response);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch content meta' });
    }
  } else if (req.method === 'POST') {
    try {
      const contentMeta = await prisma.contentMeta.update({
        where: { slug: slug as string },
        data: {
          views: {
            increment: 1,
          },
        },
        select: { views: true },
      });

      return res.json(contentMeta);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update views count' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
