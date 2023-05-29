import React, { FC } from "react";
import ImageCarousel from "@/common/components/elements/ImageCarousel";
import { CLIENT_IMAGES } from "@/common/constant/clients";

const Services: FC = () => {
	return (
		<div className="space-y-3">
			<h2 className="font-medium text-xl">What I&apos;ve been working on</h2>
			<p className="leading-loose dark:text-neutral-300">
				I assist brands, companies, institutions, and startups in creating
				exceptional digital experiences for their businesses through strategic
				development services. Here are a few notable clients I have collaborated
				with.
			</p>
			<ImageCarousel images={CLIENT_IMAGES} interval={4000} />
		</div>
	);
};

export default Services;
