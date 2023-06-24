import useIsMobile from '@/common/hooks/use-is-mobile';

import Breakline from '../../elements/Breakline';
import ToggleMode from '../../elements/ToggleMode';
import Navigation from '../../sidebar/Navigation';
import Profile from '../../sidebar/Profile';

const Sidebar = () => {
  const isMobile = useIsMobile();
  // const [isSticky, setIsSticky] = useState<boolean>(false);

  // useEffect(() => {
  // 	const handleScroll = () => {
  // 		const sidebar = document.getElementById("sidebar");
  // 		if (sidebar) {
  // 			const { top } = sidebar.getBoundingClientRect();
  // 			setIsSticky(top <= 0);
  // 		}
  // 	};

  // 	window.addEventListener("scroll", handleScroll);
  // 	return () => {
  // 		window.removeEventListener("scroll", handleScroll);
  // 	};
  // }, []);

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
          <ToggleMode />
        </>
      )}
    </div>
  );
};

export default Sidebar;
