import React, { FC } from "react";
import { ABOUT } from "@/common/constant/about";

const Story: FC = () => {
	return (
		<div
			className="space-y-4 leading-loose dark:text-neutral-300"
			dangerouslySetInnerHTML={{ __html: ABOUT }}
		/>
	);
};

export default Story;
