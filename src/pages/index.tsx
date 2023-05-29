import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

import Container from "@/common/components/elements/Container";
import Home from "@/modules/home/components/Home";

const HomePage: NextPage = () => {
	return (
		<>
			<NextSeo title="Ryan Aulia - Personal Website" />
			<Container data-aos="fade-up">
				<Home />
			</Container>
		</>
	);
};

export default HomePage;
