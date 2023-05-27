import React from "react";
import { NextPage } from "next";

import Container from "@/common/components/elements/Container";
import Portfolio from "@/modules/portfolio/components/Portfolio";

const PortfolioPage: NextPage = () => {
	return (
		<Container data-aos="fade-up">
			<Portfolio />
		</Container>
	);
};

export default PortfolioPage;
