import React, { FC } from "react";
import Image from "@/common/components/elements/Image";
import { ProjectItemProps } from "@/common/types/projects";

const ProjectDetail: FC<ProjectItemProps> = ({
  title,
  description,
  image,
  slug,
  stacks,
  link_demo,
  link_github,
  updated_at,
}) => {
  return (
    <div>
      <Image
        src={image}
        width={800}
        height={400}
        alt={title}
        className="hover:scale-105"
      />
    </div>
  );
};

export default ProjectDetail;
