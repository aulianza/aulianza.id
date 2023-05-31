import React, { FC, MouseEvent } from "react";
import Icon from "supercons";

type PaginationButtonProps = {
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
  text: string;
  icon?: string;
  size?: number;
};

const PaginationButton: FC<PaginationButtonProps> = ({
  onClick,
  text,
  icon,
  size,
}) => {
  return (
    <div
      className="flex items-center cursor-pointer font-medium gap-1 text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-600 py-2 px-4 rounded-lg hover:bg-neutral-100 hover:dark:bg-neutral-700 transition-all duration-300"
      onClick={onClick}
    >
      {icon && <Icon glyph={icon} size={size} />}
      <span>{text}</span>
    </div>
  );
};

export default PaginationButton;
