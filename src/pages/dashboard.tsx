import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { SWRConfig } from "swr";

import Container from "@/common/components/elements/Container";
import Dashboard from "@/modules/dashboard/components/Dashboard";

import { getGithubUser } from "@/services/github";
import { getReadStats } from "@/services/wakatime";

interface DashboardPageProps {
	fallback: any;
}

const DashboardPage: NextPage<DashboardPageProps> = ({ fallback }) => {
	return (
		<SWRConfig value={{ fallback }}>
			<NextSeo title="Dashboard - Ryan Aulia" />
			<Container data-aos="fade-up">
				<Dashboard />
			</Container>
		</SWRConfig>
	);
};

export default DashboardPage;

export async function getStaticProps() {
	const readStats = await getReadStats();
	const githubUser = await getGithubUser();

	return {
		props: {
			fallback: {
				"/api/read-stats": readStats.data,
				"/api/github": githubUser?.data,
			},
		},
		revalidate: 1,
	};
}
