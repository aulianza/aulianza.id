import React, { FC } from "react";
import useSWR from "swr";
import { BsGithub as GithubIcon } from "react-icons/bs";

import Overview from "./Overview";
import Calendar from "./Calendar";

import { fetcher } from "@/services/fetcher";

const Contributions: FC = () => {
	const { data } = useSWR("/api/github", fetcher);

	const contributionCalendar =
		data?.contributionsCollection?.contributionCalendar;

	return (
		<div className="flex flex-col gap-y-2">
			<h2 className="flex items-center gap-2 text-xl lg:text-xl font-medium">
				<GithubIcon />
				<span>Contributions</span>
			</h2>
			<p className="dark:text-neutral-400">
				My GitHub contributions from last year.
			</p>

			{!data && <div className="dark:text-neutral-400">No Data</div>}

			{data && (
				<div className="space-y-3">
					<Overview data={contributionCalendar} />
					<Calendar data={contributionCalendar} />
				</div>
			)}
		</div>
	);
};

export default Contributions;
