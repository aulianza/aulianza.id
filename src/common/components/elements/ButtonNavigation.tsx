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
    <Button onClick={onClick}>
      {action === 'previous' && buttonIcon}
      {buttonText} <span className='hidden md:flex'>: {title}</span>
      {action === 'next' && buttonIcon}
    </Button>
  );
};

export default ButtonNavigation;
