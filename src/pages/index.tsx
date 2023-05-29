import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

import Home from "@/modules/home";

import Container from "@/common/components/elements/Container";

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
