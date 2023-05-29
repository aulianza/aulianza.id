import React, { FC } from "react";

import CareerList from "./CareerList";

import { ABOUT } from "@/common/constant/about";

const About: FC = () => {
	return (
		<>
			<div
				className="space-y-4 leading-loose text-justify dark:text-neutral-300"
				dangerouslySetInnerHTML={{ __html: ABOUT }}
			/>
			<CareerList />
		</>
	);
};

export default About;
