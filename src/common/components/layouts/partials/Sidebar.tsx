import useIsMobile from '@/common/hooks/useIsMobile';

import Copyright from './Copyright';
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
          <Copyright />
        </>
      )}
    </div>
  );
};

export default Sidebar;
