import React, { FC } from "react";
import moment from "moment";
import Icon from "supercons";

import { BsGithub as GithubIcon } from "react-icons/bs";

interface BlogHeaderProps {
  title: string;
  comments_count?: number;
  reading_time_minutes?: number;
  published_at?: string;
}

const BlogHeader: FC<BlogHeaderProps> = ({
  title,
  comments_count = 0,
  published_at,
  reading_time_minutes,
}) => {
  return (
    <>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex flex-col sm:flex-row gap-2 justify-between mb-6 pt-5 pb-6 border-b border-dashed border-neutral-600 text-neutral-600 dark:text-neutral-400 text-[14px]">
        <div>
          Published on
          <span className="px-1 font-medium">
            {moment(published_at).format("MMMM DD, YYYY")}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex gap-1 items-center font-medium">
            <Icon glyph="clock" size={18} />
            <div className="flex gap-1">
              <span>{reading_time_minutes}</span>
              <span>min read</span>
            </div>
          </div>
          <div className="flex gap-1 items-center font-medium">
            <Icon glyph="message" size={22} />
            <div className="flex gap-1">
              <span>{comments_count}</span>
              <span>Comment{comments_count > 1 && "s"}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeader;
