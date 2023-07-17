import axios from 'axios';

import { BlogItemProps } from '@/common/types/blog';

const BASE_URL = 'https://dev.to/api/';
const BLOG_URL = `${BASE_URL}articles/`;
const COMMENT_URL = `${BASE_URL}comments`;
const USERNAME = 'aulianza';

const DEVTO_KEY = process.env.DEVTO_KEY as string;

type BlogParamsProps = {
  page?: number;
  per_page?: number;
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

  const response = await axios.get(`${BLOG_URL}me?${params.toString()}`, {
    headers: {
      'api-key': DEVTO_KEY,
    },
  });

  const status = response?.status;

  if (status >= 400) {
    return { status, data: {} };
  }

  const getData = response.data;

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

  const response = await axios.get(`${BLOG_URL}/${id}?${params.toString()}`, {
    headers: {
      'api-key': DEVTO_KEY,
    },
  });

  const status = response?.status;

  if (status >= 400) {
    return { status, data: {} };
  }

  const data = response.data;

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
  const response = await axios.get(`${COMMENT_URL}/?a_id=${post_id}`, {
    headers: {
      'api-key': DEVTO_KEY,
    },
  });

  const status = response?.status;

  if (status >= 400) {
    return { status, data: {} };
  }

  const data = response.data;

  return {
    status,
    data,
  };
};

export const getBlogViews = async ({
  id,
}: {
  id: number;
}): Promise<{ status: number; data: any }> => {
  const response = await axios.get(`${BLOG_URL}me/all`, {
    headers: {
      'api-key': DEVTO_KEY,
    },
  });

  const status = response?.status;

  if (status >= 400) {
    return { status, data: {} };
  }

  const data = response.data;

  const findArticle = data?.find((blog: BlogItemProps) => blog.id === id);
  const page_views_count = findArticle?.page_views_count;

  return {
    status,
    data: {
      page_views_count,
    },
  };
};
