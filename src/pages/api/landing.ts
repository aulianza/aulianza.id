import { NextApiRequest, NextApiResponse } from "next";
import { getApiData } from "@/services/aulianza";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queryParams = req.query;

  let query = "";

  if (typeof queryParams.query === "string") {
    query = queryParams.query;
  } else if (Array.isArray(queryParams.query)) {
    query = queryParams.query[0];
  }

  const response = await getApiData(query);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(response.status).json(response.data);
}
