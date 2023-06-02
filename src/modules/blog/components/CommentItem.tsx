import React, { FC } from "react";
import moment from "moment";
import Image from "@/common/components/elements/Image";
import { CommentItemProps } from "@/common/types/blog";

const CommentItem: FC<CommentItemProps> = ({ body_html, created_at, user }) => {
  return (
    <div className="flex gap-5 dark:text-neutral-400 break-all">
      <div className="flex-shrink-0">
        <Image
          src={user?.profile_image_90}
          alt={user?.name}
          width={40}
          height={40}
          rounded="rounded-full"
          className="border border-neutral-200 dark:border-neutral-800"
        />
      </div>
      <div className="flex flex-col w-full gap-2 px-5 py-4 border rounded-md border-neutral-300 dark:border-neutral-700">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <div className="font-medium dark:text-neutral-300">{user?.name}</div>
          <div className="hidden sm:block dark:text-neutral-700">•</div>
          <div className="text-xs dark:text-neutral-500">
            {moment(created_at).format("MMM DD, YYYY - HH:mm")}
          </div>
        </div>
        <div
          className="leading-[1.8]"
          dangerouslySetInnerHTML={{ __html: body_html }}
        />
      </div>
    </div>
  );
};

export default CommentItem;
