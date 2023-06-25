import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

const useIsMobile = () => {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(width < 769);

  useEffect(() => {
    setIsMobile(width < 821);
  }, [width]);

  return isMobile;
};

export default useIsMobile;
