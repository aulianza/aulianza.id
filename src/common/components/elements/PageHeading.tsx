import React, { FC } from "react";

interface PageHeadingProps {
	title: string;
	description?: string;
}

const PageHeading: FC<PageHeadingProps> = ({ title, description }) => {
	return (
		<>
			<h1 className="text-2xl font-semibold">{title}</h1>
			<p className="mb-6 border-b border-dashed border-neutral-600 pt-2 pb-6 dark:text-neutral-400">
				{description}
			</p>
		</>
	);
};

export default PageHeading;
