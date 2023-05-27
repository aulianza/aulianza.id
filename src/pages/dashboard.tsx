import React from "react";
import { NextPage } from "next";

import Container from "@/common/components/elements/Container";
import Dashboard from "@/modules/dashboard/components/Dashboard";

const DashboardPage: NextPage = () => {
	return (
		<Container data-aos="fade-up">
			<Dashboard />
		</Container>
	);
};

export default DashboardPage;
