import React, { FC } from "react";
import Link from "next/link";
import { HiOutlineBriefcase as CareerIcon } from "react-icons/hi";
import { LuDownload as DownloadIcon } from "react-icons/lu";

import CareerCard from "./CareerCard";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubheading";

import { CAREERS } from "@/common/constant/careers";

const RESUME_URL = "https://api.aulianza.id/files/resume.pdf";

const CareerList: FC = () => {
	return (
		<section className="space-y-6">
			<div className="space-y-2">
				<SectionHeading title="Career" icon={<CareerIcon className="mr-1" />} />
				<SectionSubHeading>
					<p className="dark:text-neutral-400">
						My professional career journey.
					</p>
					<Link
						href={RESUME_URL}
						target="_blank"
						passHref
						className="flex gap-2 hover:gap-3 transition-all duration-300 items-center text-neutral-600 dark:text-neutral-500 hover:text-neutral-700 hover:dark:text-neutral-300"
					>
						<DownloadIcon />
						<span>Download Resume</span>
					</Link>
				</SectionSubHeading>
			</div>

			<div className="grid md:grid-cols-2 gap-4">
				{CAREERS?.map((career, index) => (
					<CareerCard key={index} {...career} />
				))}
			</div>
		</section>
	);
};

export default CareerList;
