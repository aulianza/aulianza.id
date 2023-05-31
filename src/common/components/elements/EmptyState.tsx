import React, { FC } from "react";
import Icon from "supercons";

type EmptyStatePageProps = {
  message: string;
};

const EmptyState: FC<EmptyStatePageProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-1 text-neutral-400 dark:text-neutral-500 py-3">
      <Icon glyph="sam" size={48} />
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;
