import { format } from 'date-fns';

import OverviewItem from './OverviewItem';

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

const Overview = ({ data }: OverviewProps) => {
  const dailyTotal = data?.human_readable_total || 'N/A';
  const dailyAverage = data?.human_readable_daily_average || 'N/A';
  const bestDayText = data?.best_day?.text || 'N/A';
  const bestDayDate = data?.best_day?.date;
  const allTimeSinceToday = data?.all_time_since_today?.text || 'N/A';
  const startDate = data?.start_date
    ? format(new Date(data.start_date), 'MMMM dd, yyyy')
    : '';
  const endDate = data?.end_date
    ? format(new Date(data.end_date), 'MMMM dd, yyyy')
    : '';
  const bestDay = bestDayDate
    ? `${format(new Date(bestDayDate), 'MMMM dd, yyyy')} (${bestDayText})`
    : 'N/A';

  return (
    <div className='mb-1 grid md:grid-cols-2 gap-3 py-2'>
      <OverviewItem label='Start Date' value={startDate} />
      <OverviewItem label='End Date' value={endDate} />
      <OverviewItem label='Daily Coding Average' value={dailyAverage} />
      <OverviewItem label='This Week Coding Time' value={dailyTotal} />
      <OverviewItem label='Best Day Coding Time' value={bestDay} />
      <OverviewItem label='All Time Since Today' value={allTimeSinceToday} />
    </div>
  );
};

export default Overview;
