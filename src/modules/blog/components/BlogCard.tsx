import React, { FC } from "react";
import moment from "moment";
import Link from "next/link";
import Icon from "supercons";

import Card from "@/common/components/elements/Card";
import Image from "@/common/components/elements/Image";

import { BlogItemProps } from "@/common/types/blog";
import { useWindowSize } from "usehooks-ts";

const BlogCard: FC<BlogItemProps> = ({
  title,
  image,
  views,
  date,
  content,
  slug,
}) => {
  const { width } = useWindowSize();
  const isMobile = width < 468;

  const trimmedContent =
    content.slice(0, 100) + (content.length > 100 ? "..." : "");

  return (
    <Link href={`/blog/${slug}`}>
      <Card className="flex flex-col sm:flex-row gap-6 sm:p-5 cursor-pointer border border-neutral-300 dark:border-neutral-800 lg:hover:scale-[102%]">
        <div className="w-fit">
          <Image
            src={image}
            width={isMobile ? 400 : 160}
            height={200}
            alt={title}
            className="rounded-t-xl sm:rounded-xl"
          />
        </div>
        <div className="flex flex-col w-full sm:w-4/5 flex-grow space-y-2 px-5 sm:p-0 mb-5 sm:mb-0">
          <h3 className="md:text-[17px] font-medium text-neutral-700 dark:text-neutral-200 lg:hover:text-sky-800 dark:hover:text-neutral-50">
            {title}
          </h3>
          <div className="flex gap-5">
            <div className="flex gap-1 items-center dark:text-neutral-400">
              <Icon glyph="clock" size={16} />
              <span className="text-xs">
                {moment(date).format("DD MMM YYYY")}
              </span>
            </div>
            <div className="flex gap-1 items-center dark:text-neutral-400">
              <Icon glyph="view" size={20} />
              <span className="text-xs">{views}</span>
              <span className="text-xs">views</span>
            </div>
          </div>
          <p className="hidden sm:block leading-relaxed text-sm text-neutral-600 dark:text-neutral-400">
            {trimmedContent}
          </p>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
