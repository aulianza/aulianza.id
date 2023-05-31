import React, { FC, useState } from "react";
import clsx from "clsx";
import useSWR from "swr";
import Icon from "supercons";
import { useWindowSize } from "usehooks-ts";

import BlogCard from "./BlogCard";
import ViewOptions from "./ViewOptions";
import SectionHeading from "@/common/components/elements/SectionHeading";

import { BlogItemProps } from "@/common/types/blog";
import { fetcher } from "@/services/fetcher";

import { useBlogViewStore } from "@/common/stores/useBlogViewStore";

type BlogList = {
  showHeader?: boolean;
  view?: string;
  perPage?: number;
};

const BlogList: FC<BlogList> = ({ perPage = 6, showHeader = true, view }) => {
  const { width } = useWindowSize();
  const isMobile = width < 468;

  const { viewOption, setViewOption } = useBlogViewStore();

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(perPage);

  const { data } = useSWR(
    `/api/blog?page=${page}&per_page=${pageSize}`,
    fetcher
  );

  const blogData: BlogItemProps[] = data?.data?.posts || [];

  return (
    <>
      {showHeader && !isMobile && (
        <div className="flex items-center justify-between text-[15px] mb-5">
          <SectionHeading
            title="Latest Articles"
            icon={<Icon glyph="rss" size={32} />}
          />
          <div className="flex gap-2 px-1 cursor-pointer">
            <ViewOptions
              option={viewOption}
              setViewOption={setViewOption}
              icon="grid"
            />
            <ViewOptions
              option={viewOption}
              setViewOption={setViewOption}
              icon="list"
            />
          </div>
        </div>
      )}
      <div
        className={clsx(
          "gap-5 sm:gap-4",
          viewOption === "list" || isMobile
            ? "flex flex-col"
            : "grid grid-cols-2 sm:!gap-5"
        )}
      >
        {blogData?.map((item: BlogItemProps, index: number) => (
          <BlogCard key={index} view={viewOption} {...item} />
        ))}
      </div>
    </>
  );
};

export default BlogList;
