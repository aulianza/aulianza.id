import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

import Container from "@/common/components/elements/Container";
import Portfolio from "@/modules/portfolio/components/Portfolio";
import PageHeading from "@/common/components/elements/PageHeading";

const PAGE_TITLE = "Portfolio";
const PAGE_DESCRIPTION =
	"Exploring my passion for technology, design, and problem-solving through code";

const PortfolioPage: NextPage = () => {
	return (
		<>
			<NextSeo title={`${PAGE_TITLE} - Ryan Aulia`} />
			<Container data-aos="fade-up">
				<PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
				<Portfolio />
			</Container>
		</>
	);
};

export default PortfolioPage;
