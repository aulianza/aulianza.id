import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { SWRConfig } from "swr";

import Container from "@/common/components/elements/Container";
import Dashboard from "@/modules/dashboard/components/Dashboard";
import PageHeading from "@/common/components/elements/PageHeading";

import { getGithubUser } from "@/services/github";
import { getReadStats } from "@/services/wakatime";

interface DashboardPageProps {
	fallback: any;
}

const PAGE_TITLE = "Dashboard";
const PAGE_DESCRIPTION =
	"This is my personal dashboard, built with Next.js API routes deployed as serverless functions.";

const DashboardPage: NextPage<DashboardPageProps> = ({ fallback }) => {
	return (
		<SWRConfig value={{ fallback }}>
			<NextSeo title={`${PAGE_TITLE} - Ryan Aulia`} />
			<Container data-aos="fade-up">
				<PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
				<Dashboard />
			</Container>
		</SWRConfig>
	);
};

export default DashboardPage;

export async function getStaticProps() {
	const readStats = await getReadStats();
	const githubUserPersonal = await getGithubUser("personal");
	const githubUserWork = await getGithubUser("work");

	return {
		props: {
			fallback: {
				"/api/read-stats": readStats.data,
				"/api/github?type=personal": githubUserPersonal?.data,
				"/api/github?type=work": githubUserWork?.data,
			},
		},
		revalidate: 1,
	};
}
