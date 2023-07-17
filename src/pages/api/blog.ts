import type { NextApiRequest, NextApiResponse } from 'next';

import { formatBlogSlug } from '@/common/helpers';
import prisma from '@/common/libs/prisma';
import { BlogItemProps } from '@/common/types/blog';
import { getBlogData } from '@/services/blog';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=30'
    );

    const { page, per_page } = req.query;

    const blogData = await getBlogData({
      page: Number(page) || 1,
      per_page: Number(per_page) || 10,
    });

    const blogItemsWithViews = await Promise.all(
      blogData?.data?.posts?.map(async (blogItem: BlogItemProps) => {
        const { slug, id, page_views_count } = blogItem;

        const formatSlug = formatBlogSlug(slug);
        const modifiedSlug = `blog/${formatSlug}?id=${id}`;

        const contentMeta = await prisma.contentMeta.findUnique({
          where: { slug: modifiedSlug as string },
          select: { views: true },
        });

        const devtoViewsCount = page_views_count ?? 0;
        const viewsCount = contentMeta?.views ?? 0;

        return {
          ...blogItem,
          db_views_count: viewsCount,
          total_views_count: devtoViewsCount + viewsCount,
        };
      })
    );

    res.status(200).json({ status: true, data: { posts: blogItemsWithViews } });
  } catch (error) {
    res.status(200).json({ status: false, error });
  }
}
