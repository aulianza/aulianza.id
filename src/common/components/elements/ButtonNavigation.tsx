import {
  FiArrowLeft as PreviousButtonIcon,
  FiArrowRight as NextButtonIcon,
} from 'react-icons/fi';

import Button from './Button';

interface ButtonNavigationProps {
  onClick: () => void;
  action: 'next' | 'previous';
  title: string | null;
}

const ButtonNavigation = ({
  onClick,
  action,
  title,
}: ButtonNavigationProps) => {
  const buttonText = action === 'next' ? 'Next' : 'Previous';
  const buttonIcon =
    action === 'next' ? <NextButtonIcon /> : <PreviousButtonIcon />;

  return (
    <Button className='transition-all duration-300' onClick={onClick}>
      {action === 'previous' && buttonIcon}
      <div className='flex items-center gap-1'>
        {buttonText}
        <span className='hidden lg:flex'> : {title}</span>
      </div>
      {action === 'next' && buttonIcon}
    </Button>
  );
};

export default ButtonNavigation;
