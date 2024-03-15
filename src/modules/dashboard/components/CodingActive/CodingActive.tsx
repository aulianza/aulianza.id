import { formatDistanceToNowStrict } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SiWakatime as WakatimeIcon } from 'react-icons/si';
import useSWR from 'swr';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { fetcher } from '@/services/fetcher';

import CodingActiveList from './CodingActiveList';
import Overview from './Overview';

interface CodingActiveProps {
  lastUpdate?: string;
}

const CodingActive = ({ lastUpdate }: CodingActiveProps) => {
  const { data } = useSWR('/api/read-stats', fetcher);
  const [formattedLastUpdate, setFormattedLastUpdate] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const formatLastUpdate = (): void => {
      const lastUpdateDate = lastUpdate || data?.last_update;
      if (lastUpdateDate) {
        const zonedDate = utcToZonedTime(
          zonedTimeToUtc(lastUpdateDate, 'Asia/Jakarta'),
          'Asia/Jakarta',
        );
        const distance = formatDistanceToNowStrict(zonedDate, {
          addSuffix: true,
        });
        setFormattedLastUpdate(distance);
      }
    };

    formatLastUpdate();
  }, [lastUpdate, data]);

  const renderLastUpdate = () => {
    if (formattedLastUpdate) {
      return <span>{formattedLastUpdate}</span>;
    }
    return null;
  };

  return (
    <section className='flex flex-col gap-y-2'>
      <SectionHeading
        title='Weekly Statistics'
        icon={<WakatimeIcon className='mr-1' />}
      />
      <SectionSubHeading>
        <div className='dark:text-neutral-400 md:flex-row md:items-center'>
          <span>My </span>
          <Link
            href='https://wakatime.com/@aulianza'
            className='hover:text-neutral-900 hover:underline dark:hover:text-neutral-100'
          >
            WakaTime
          </Link>
          <span> last 7 days stats.</span>
        </div>
        <div className='text-sm text-neutral-600 dark:text-neutral-500'>
          Last update: {renderLastUpdate()}
        </div>
      </SectionSubHeading>

      <Overview data={data} />
      <CodingActiveList data={data} />
    </section>
  );
};

export default CodingActive;
