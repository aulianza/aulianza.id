const BLOG_URL = "https://dev.to/api/articles";
const COMMENT_URL = "https://dev.to/api/comments";
const USERNAME = "naucode";

type BlogParamsProps = {
  page?: number;
  per_page?: number;
};

type CommentParamsProps = {
  a_id?: number;
};

export const getBlogData = async ({
  page = 1,
  per_page = 6,
}: BlogParamsProps): Promise<{ status: number; data: any }> => {
  const params = new URLSearchParams({
    username: USERNAME,
    page: page.toString(),
    per_page: per_page.toString(),
  });

  const response = await fetch(`${BLOG_URL}?${params.toString()}`, {
    method: "GET",
  });

  const status = response?.status;

  if (status >= 400) {
    return { status, data: {} };
  }

  const getData = await response.json();

  const data = {
    posts: getData,
    page: page,
    per_page: per_page,
    has_next: getData?.length === per_page,
  };

  return {
    status,
    data,
  };
};

export const getBlogDetail = async ({
  id,
}: {
  id: number;
}): Promise<{ status: number; data: any }> => {
  const params = new URLSearchParams({ username: USERNAME });

  const response = await fetch(`${BLOG_URL}/${id}?${params.toString()}`, {
    method: "GET",
  });

  const status = response?.status;

  if (status >= 400) {
    return { status, data: {} };
  }

  const data = await response.json();

  return {
    status,
    data,
  };
};

export const getBlogComment = async ({
  post_id,
}: {
  post_id: string;
}): Promise<{ status: number; data: any }> => {
  const response = await fetch(`${COMMENT_URL}/?a_id=${post_id}`, {
    method: "GET",
  });

  const status = response?.status;

  if (status >= 400) {
    return { status, data: {} };
  }

  const data = await response.json();

  return {
    status,
    data,
  };
};
