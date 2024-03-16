import { BsBuildings as CompanyIcon } from 'react-icons/bs';

import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import { EducationProps } from '@/common/types/education';

const EducationCard = ({
  school,
  major,
  logo,
  degree,
  start_year,
  end_year,
  location,
  link,
}: EducationProps) => {
  return (
    <Card className='flex items-center gap-5 border border-neutral-300 px-6 py-4 dark:border-neutral-900'>
      {logo ? (
        <Image src={logo} width={55} height={55} alt={school} />
      ) : (
        <CompanyIcon size={50} />
      )}

      <div className='space-y-1'>
        <a
          href={link || '#'}
          target='_blank'
          data-umami-event={`Click Education School: ${school}`}
        >
          <h6>{school}</h6>
        </a>
        <div className='space-y-2 text-sm text-neutral-600 dark:text-neutral-400'>
          <div className='flex flex-col gap-1 md:flex-row md:gap-2'>
            <span>{degree}</span>
            <span className='hidden text-neutral-300 dark:text-neutral-700 md:flex'>
              •
            </span>
            <span>{major}</span>
          </div>
          <div className='flex flex-col gap-3 md:flex-row md:text-[13px]'>
            <div className='flex gap-1 text-neutral-500'>
              <span>{start_year}</span> - <span>{end_year || 'Present'}</span>
            </div>
            <span className='hidden text-neutral-300 dark:text-neutral-700 lg:block'>
              •
            </span>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EducationCard;
