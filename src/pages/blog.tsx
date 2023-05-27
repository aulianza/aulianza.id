import React from "react";
import { NextPage } from "next";

import BlogList from "@/modules/blog/components/BlogList";
import Container from "@/common/components/elements/Container";

const BlogPage: NextPage = () => {
	return (
		<Container data-aos="fade-up">
			<BlogList />
		</Container>
	);
};

export default BlogPage;
