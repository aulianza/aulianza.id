import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

import BlogList from "@/modules/blog/components/BlogList";
import Container from "@/common/components/elements/Container";

const BlogPage: NextPage = () => {
	return (
		<>
			<NextSeo title="Blog - Ryan Aulia" />
			<Container data-aos="fade-up">
				<BlogList />
			</Container>
		</>
	);
};

export default BlogPage;
