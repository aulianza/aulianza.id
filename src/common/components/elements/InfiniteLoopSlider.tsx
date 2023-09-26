import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface InfiniteLoopSliderProps {
  children: ReactNode;
  isReverse?: boolean;
}

const InfiniteLoopSlider = ({
  children,
  isReverse = false,
}: InfiniteLoopSliderProps) => {
  return (
    <StyledSlider
      className='flex w-fit animate-looping-tag'
      isReverse={isReverse}
    >
      {children}
    </StyledSlider>
  );
};

export default InfiniteLoopSlider;

const StyledSlider = styled.div<{ isReverse: boolean }>`
  animation-direction: ${({ isReverse }) => (isReverse ? 'reverse' : 'normal')};
`;
