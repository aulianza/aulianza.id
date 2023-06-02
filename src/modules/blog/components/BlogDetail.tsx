import React, { FC } from "react";

import BlogHeader from "./BlogHeader";

import Breakline from "@/common/components/elements/Breakline";
import Image from "@/common/components/elements/Image";
import MarkdownRenderer from "@/common/components/elements/MarkdownRenderer";

import { BlogItemProps } from "@/common/types/blog";

const BlogDetail: FC<BlogItemProps> = ({
  cover_image,
  title,
  body_markdown,
  comments_count,
  published_at,
  url,
  tags,
  reading_time_minutes,
}) => {
  return (
    <>
      <BlogHeader
        title={title}
        comments_count={comments_count}
        reading_time_minutes={reading_time_minutes}
        published_at={published_at}
      />
      <div className="space-y-6 leading-[1.8] dark:text-neutral-400 break-all">
        <Image
          src={cover_image}
          width={800}
          height={500}
          alt={title}
          className="hover:scale-105 mb-6"
        />
        {body_markdown && <MarkdownRenderer>{body_markdown}</MarkdownRenderer>}
      </div>
      <Breakline className="!my-10" />
    </>
  );
};

export default BlogDetail;
