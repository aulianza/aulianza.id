import Link from 'next/link';
import { FiArrowLeftCircle as BackButtonIcon } from 'react-icons/fi';

type BackButtonProps = {
  url: string;
};

const BackButton = ({ url }: BackButtonProps) => {
  return (
    <div className='w-fit'>
      <Link href={url} passHref>
        <div className='flex gap-2 w-max hover:gap-3 items-center pb-5 transition-all duration-300 font-medium text-neutral-600 dark:text-neutral-400'>
          <BackButtonIcon size={20} data-testid='back-icon' />
          <span>Back</span>
        </div>
      </Link>
    </div>
  );
};

export default BackButton;
