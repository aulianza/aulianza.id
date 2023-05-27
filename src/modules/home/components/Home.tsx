import React, { FC } from "react";

import Introduction from "./Introduction";
import Breakline from "@/common/components/elements/Breakline";

const Home: FC = () => {
	return (
		<>
			<Introduction />
			<Breakline className="my-8" />
			<div className="h-full">haahha</div>
		</>
	);
};

export default Home;
