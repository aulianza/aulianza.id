import React, { FC } from "react";
import Link from "next/link";
import moment from "moment";
import useSWR from "swr";
import { SiWakatime as WakatimeIcon } from "react-icons/si";

import Overview from "./Overview";
import CodingActiveList from "./CodingActiveList";

import { fetcher } from "@/services/fetcher";

const CodingActive: FC = () => {
	const { data } = useSWR("/api/read-stats", fetcher);

	const formatLastUpdate = (): string => {
		const lastUpdate = moment(data?.last_update);
		if (lastUpdate.isValid()) {
			return lastUpdate.startOf("hour").fromNow();
		}
		return "";
	};

	return (
		<div className="flex flex-col gap-y-2">
			<h2 className="flex items-center gap-2 text-xl">
				<WakatimeIcon />
				<span>Weekly Statistics</span>
			</h2>

			<div className="flex flex-col justify-between gap-1 dark:text-neutral-400 md:flex-row md:items-center">
				<div>
					<span>My </span>
					<Link
						href="https://wakatime.com/@aulianza"
						className="hover:text-neutral-900 hover:underline dark:hover:text-neutral-100"
					>
						WakaTime
					</Link>
					<span> last 7 days stats. </span>
				</div>
				<div>
					Last update: <span>{formatLastUpdate()}</span>
				</div>
			</div>

			<Overview data={data} />
			<CodingActiveList data={data} />
		</div>
	);
};

export default CodingActive;
