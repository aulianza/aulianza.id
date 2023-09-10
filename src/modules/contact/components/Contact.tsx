import clsx from 'clsx';

import Breakline from '@/common/components/elements/Breakline';
import Button from '@/common/components/elements/Button';
import { SOCIAL_MEDIA } from '@/common/constant/menu';

import ContactForm from './ContactForm';

const Contact = () => {
  const handleAction = (link: string) => window.open(link, '_blank');

  return (
    <section className='space-y-6'>
      <div className='space-y-5 pb-2'>
        <h3 className='text-lg font-medium'>Find me on social media</h3>
        <div className='flex flex-col md:flex-row justify-between gap-3'>
          {SOCIAL_MEDIA?.map((item, index: number) => (
            <Button
              className={clsx(
                'w-full md:w-1/5 flex justify-center items-center hover:scale-[101%] transition-all duration-300',
                item?.className
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
      <Breakline />
      <div className='space-y-5'>
        <h3 className='text-lg font-medium'>Or send me a message</h3>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
