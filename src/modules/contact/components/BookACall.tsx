import Link from 'next/link';
import { FiCalendar, FiClock, FiVideo } from 'react-icons/fi';

const BookACall = () => {
  return (
    <div className='space-y-5 pb-2'>
      <h3 className='text-lg font-medium'>Book a Call</h3>
      <Link
        href='https://cal.com/aulianza/schedule'
        target='_blank'
        data-aos-duration='1000'
        className='flex cursor-pointer flex-col space-y-5 rounded-2xl border bg-white bg-gradient-to-tr px-6 py-5 transition-all duration-300 hover:scale-[101%] hover:shadow-sm dark:border-teal-500 dark:from-teal-950 dark:to-teal-800 dark:text-white'
      >
        <div className='flex items-start justify-between gap-5'>
          <div className='space-y-1'>
            <div className='flex items-center gap-2 text-base font-medium md:text-lg'>
              <span>1 on 1 Chit-chat Session</span>
            </div>
            <p className='text-sm dark:text-neutral-300 md:text-base'>
              Let’s find some time to talk about anything
            </p>
          </div>
          <div className='rounded-full border-2 border-neutral-400 p-3 dark:border-teal-600 dark:text-neutral-100'>
            <FiCalendar size={22} />
          </div>
        </div>
        <div className='flex items-center gap-5 text-sm dark:text-neutral-200'>
          <div className='flex items-center gap-2'>
            <FiClock size={18} />
            <span>30 Minutes</span>
          </div>
          <div className='flex items-center gap-2'>
            <FiVideo size={18} />
            <span>Google Meet</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookACall;
