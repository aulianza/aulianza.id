import { memo } from 'react';

import ButtonNavigation from './ButtonNavigation';

interface NavigationSectionProps {
  currentIndex: number;
  totalItems: number;
  handleNext: () => void;
  handlePrevious: () => void;
  previousTitle: string | null;
  nextTitle: string | null;
}

const NavigationSection = memo(
  ({
    currentIndex,
    totalItems,
    handleNext,
    handlePrevious,
    previousTitle,
    nextTitle,
  }: NavigationSectionProps) => {
    return (
      <div className='flex justify-between mt-8 border-t dark:border-neutral-700 border-gray-300 py-5'>
        {previousTitle && currentIndex !== 0 && (
          <ButtonNavigation
            onClick={handlePrevious}
            action='previous'
            title={previousTitle}
          />
        )}
        <div className='flex-grow'></div>
        {nextTitle && currentIndex !== totalItems - 1 && (
          <ButtonNavigation
            onClick={handleNext}
            action='next'
            title={nextTitle}
          />
        )}
      </div>
    );
  }
);

export default NavigationSection;
