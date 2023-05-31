import prisma from "@/common/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const projectSlug = req.query.slug;

  if (req.method === "GET") {
    const post = await prisma.projects.findUnique({
      where: { slug: String(projectSlug) },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
