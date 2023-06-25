import useIsMobile from '@/common/hooks/useIsMobile';

import Breakline from '../../elements/Breakline';
import Navigation from '../../sidebar/Navigation';
import Profile from '../../sidebar/Profile';

const Sidebar = () => {
  const isMobile = useIsMobile();

  return (
    <div
      id='sidebar'
      className='sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8'
    >
      <Profile />
      {!isMobile && (
        <>
          <Breakline />
          <Navigation />
          <Breakline />
          <div className='flex items-center gap-1 text-sm px-4 text-neutral-700 dark:text-neutral-600'>
            <span>©</span>
            <span>{new Date().getFullYear()}</span>
            <span>by</span>
            <span>aulianza</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
