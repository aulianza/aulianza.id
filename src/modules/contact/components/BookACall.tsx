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
        className='flex flex-col space-y-5 bg-gradient-to-r from-blue-800 to-indigo-900 text-white rounded-2xl py-5 px-6 cursor-pointer hover:scale-[101%] hover:shadow-sm transition-all duration-300 '
      >
        <div className='flex gap-5 items-start justify-between'>
          <div className='space-y-1'>
            <div className='flex items-center gap-2 text-base md:text-lg font-medium'>
              <span>1 on 1 Chit-chat Session</span>
            </div>
            <p className='text-neutral-300 text-sm md:text-base'>
              Let’s find some time to talk about anything
            </p>
          </div>
          <div className='p-3 border-2 border-neutral-400 text-neutral-100 rounded-full'>
            <FiCalendar size={22} />
          </div>
        </div>
        <div className='flex items-center gap-5 text-neutral-200 text-sm'>
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
