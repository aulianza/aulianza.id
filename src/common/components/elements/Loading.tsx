import React, { FC } from "react";
import clsx from "clsx";
import { HashLoader } from "react-spinners";

type LoadingProps = {
  isFullScreen?: boolean;
};

const Loading: FC<LoadingProps> = ({ isFullScreen = false }) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center p-40",
        isFullScreen && "h-screen"
      )}
    >
      <HashLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
