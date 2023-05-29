import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

import Container from "@/common/components/elements/Container";
import Portfolio from "@/modules/portfolio/components/Portfolio";

const PortfolioPage: NextPage = () => {
	return (
		<>
			<NextSeo title="Portfolio - Ryan Aulia" />
			<Container data-aos="fade-up">
				<Portfolio />
			</Container>
		</>
	);
};

export default PortfolioPage;
