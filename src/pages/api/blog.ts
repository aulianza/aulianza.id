import { getBlogData } from "@/services/blog";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate=30"
    );

    const { page, per_page } = req.query;

    const response = await getBlogData({
      page: Number(page) || 1,
      per_page: Number(per_page) || 10,
    });

    res.status(200).json({ status: true, data: response.data });
  } catch (error) {
    res.status(200).json({ status: false, error });
  }
}
