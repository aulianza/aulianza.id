import React, { FC } from "react";

import Contributions from "./Contributions";
import CodingActive from "./CodingActive";

import Breakline from "@/common/components/elements/Breakline";

const Dashboard: FC = () => {
	return (
		<>
			<Contributions />
			<Breakline className="mt-10 mb-8" />
			<CodingActive />
		</>
	);
};

export default Dashboard;
