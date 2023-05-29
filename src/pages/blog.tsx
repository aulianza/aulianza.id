import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

import BlogList from "@/modules/blog";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";

const PAGE_TITLE = "Blog";
const PAGE_DESCRIPTION =
	"Exploring the world of code, creativity, and constant learning.";

const BlogPage: NextPage = () => {
	return (
		<>
			<NextSeo title={`${PAGE_TITLE} - Ryan Aulia`} />
			<Container data-aos="fade-up">
				<PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
				<BlogList />
			</Container>
		</>
	);
};

export default BlogPage;
