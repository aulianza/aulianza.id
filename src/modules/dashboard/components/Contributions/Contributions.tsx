import React, { FC } from "react";
import useSWR from "swr";
import Link from "next/link";
import { BsGithub as GithubIcon } from "react-icons/bs";

import Overview from "./Overview";
import Calendar from "./Calendar";

import { fetcher } from "@/services/fetcher";

type ContributionsProps = {
	username: string;
	type: string;
	endpoint: string;
};

const Contributions: FC<ContributionsProps> = ({
	username,
	type,
	endpoint,
}) => {
	const { data } = useSWR(endpoint, fetcher);

	const contributionCalendar =
		data?.contributionsCollection?.contributionCalendar;

	return (
		<div className="flex flex-col gap-y-2">
			<h2 className="flex items-center gap-2 text-xl lg:text-xl font-medium">
				<GithubIcon />
				<div>
					<span className="capitalize">{type} </span>
					<span>Contributions</span>
				</div>
			</h2>
			<div className="flex flex-col lg:flex-row justify-between lg:items-center gap-2">
				<p className="dark:text-neutral-400">
					My contributions from last year on my {type} account.
				</p>
				<Link
					href={`https://github.com/${username}`}
					target="_blank"
					passHref
					className="text-sm font-code text-neutral-400 dark:text-neutral-600"
				>
					@{username}
				</Link>
			</div>

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
