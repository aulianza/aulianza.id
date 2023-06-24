import { MENU_ITEMS, SOCIAL_MEDIA } from '@/common/constant/menu';

import Menu from './Menu';
import Breakline from '../elements/Breakline';

const Navigation = () => {
  const filterdMenu = MENU_ITEMS?.filter((item) => item?.is_show);
  const filteredSocialMedia = SOCIAL_MEDIA?.filter((item) => item?.is_show);

  return (
    <>
      <Menu list={filterdMenu} />
      <Breakline />
      <Menu title="Let's Connect" list={filteredSocialMedia} />
    </>
  );
};

export default Navigation;
