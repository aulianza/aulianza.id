import React, { FC } from "react";

import Breakline from "@/common/components/elements/Breakline";

import Introduction from "./Introduction";
import Services from "./Services";
import BlogPreview from "./BlogPreview";

const Home: FC = () => {
	return (
		<>
			<Introduction />
			<Breakline className="mt-8 mb-6" />
			<BlogPreview />
			<Breakline className="my-8" />
			<Services />
		</>
	);
};

export default Home;
