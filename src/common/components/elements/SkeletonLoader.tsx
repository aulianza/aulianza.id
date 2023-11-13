import { useTheme } from 'next-themes';
import { ReactNode } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

type SkeletonLoaderProps = {
  children: ReactNode;
};

const SkeletonLoader = ({ children }: SkeletonLoaderProps) => {
  const { resolvedTheme } = useTheme();
  const baseColor = resolvedTheme === 'light' ? '#ebebeb' : '#202020';
  const highlightColor = resolvedTheme === 'light' ? '#f5f5f5' : '#2e2e2e';

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      {children}
    </SkeletonTheme>
  );
};

export default SkeletonLoader;
