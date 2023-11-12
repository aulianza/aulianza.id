import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/common/libs/prisma';
import { BlogItemProps } from '@/common/types/blog';
import { getBlogList } from '@/services/blog';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=30'
    );

    const { page, per_page, categories, search } = req.query;

    const responseData = await getBlogList({
      page: Number(page) || 1,
      per_page: Number(per_page) || 9,
      categories: categories ? Number(categories) : undefined,
      search: search ? String(search) : undefined,
    });

    const blogItemsWithViews = await Promise.all(
      responseData?.data?.posts?.map(async (blogItem: BlogItemProps) => {
        const { slug } = blogItem;

        const contentMeta = await prisma.contentMeta.findUnique({
          where: { slug: slug as string },
          select: { views: true },
        });

        const viewsCount = contentMeta?.views ?? 0;

        return {
          ...blogItem,
          total_views_count: viewsCount,
        };
      })
    );

    const responses = {
      status: true,
      data: {
        total_pages: responseData?.data?.total_pages,
        total_posts: responseData?.data?.total_posts,
        page: responseData?.data?.page,
        per_page: responseData?.data?.per_page,
        posts: blogItemsWithViews,
        categories: responseData?.data?.categories,
      },
    };

    res.status(200).json(responses);
  } catch (error) {
    res.status(200).json({ status: false, error });
  }
}
