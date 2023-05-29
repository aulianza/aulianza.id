import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

import Contact from "@/modules/contact";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";

const PAGE_TITLE = "Contact";
const PAGE_DESCRIPTION = "Let's get in touch!";

const ContactPage: NextPage = () => {
	return (
		<>
			<NextSeo title={`${PAGE_TITLE} - Ryan Aulia`} />
			<Container data-aos="fade-up">
				<PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
				<Contact />
			</Container>
		</>
	);
};

export default ContactPage;
