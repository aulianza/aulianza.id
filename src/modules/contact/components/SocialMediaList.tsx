import clsx from 'clsx';

import Button from '@/common/components/elements/Button';
import { SOCIAL_MEDIA } from '@/common/constant/menu';

const SocialMediaList = () => {
  const handleAction = (link: string) => window.open(link, '_blank');

  return (
    <div className='space-y-5 pb-2'>
      <h3 className='text-lg font-medium'>Find me on social media</h3>
      <div className='flex flex-col justify-between gap-3 md:flex-row'>
        {SOCIAL_MEDIA?.map((item, index: number) => (
          <Button
            className={clsx(
              'flex w-full items-center justify-center transition-all duration-300 hover:scale-105 md:w-1/5',
              item?.className,
            )}
            key={index}
            onClick={() => handleAction(item?.href)}
            icon={item?.icon}
            data-umami-event={item?.eventName}
          >
            {item?.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaList;
