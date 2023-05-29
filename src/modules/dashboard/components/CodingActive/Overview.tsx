import { FC } from "react";
import moment from "moment";
import OverviewItem from "./OverviewItem";

interface OverviewProps {
	data: {
		human_readable_total?: string;
		human_readable_daily_average?: string;
		best_day?: {
			text?: string;
			date?: string;
		};
		all_time_since_today?: {
			text?: string;
		};
		start_date?: string;
		end_date?: string;
	};
}

const Overview: FC<OverviewProps> = ({ data }) => {
	const dailyTotal = data?.human_readable_total ?? "N/A";
	const dailyAverage = data?.human_readable_daily_average ?? "N/A";
	const bestDay = data?.best_day?.text ?? "N/A";
	const allTimeSinceToday = data?.all_time_since_today?.text ?? "N/A";

	return (
		<div className="mb-1 grid md:grid-cols-2 gap-3 py-2">
			<OverviewItem
				label="Start Date"
				value={moment(data?.start_date).format("MMMM DD, YYYY")}
			/>
			<OverviewItem
				label="End Date"
				value={moment(data?.end_date).format("MMMM DD, YYYY")}
			/>
			<OverviewItem label="Daily Coding Average" value={dailyAverage} />
			<OverviewItem label="This Week Coding Time" value={dailyTotal} />
			<OverviewItem
				label="Best Day Coding Time"
				value={`${moment(data?.best_day?.date).format(
					"MMMM DD, YYYY"
				)} (${bestDay})`}
			/>
			<OverviewItem label="All Time Since Today" value={allTimeSinceToday} />
		</div>
	);
};

export default Overview;
