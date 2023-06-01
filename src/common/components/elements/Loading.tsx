import React, { FC } from "react";
import { HashLoader } from "react-spinners";

const Loading: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <HashLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
