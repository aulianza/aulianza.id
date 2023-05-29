import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

import Container from "@/common/components/elements/Container";
import Dashboard from "@/modules/dashboard/components/Dashboard";

const DashboardPage: NextPage = () => {
	return (
		<>
			<NextSeo title="Dashboard - Ryan Aulia" />
			<Container data-aos="fade-up">
				<Dashboard />
			</Container>
		</>
	);
};

export default DashboardPage;
