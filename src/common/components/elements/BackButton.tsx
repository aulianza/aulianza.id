import Link from 'next/link';
import Icon from 'supercons';

type BackButtonProps = {
  url: string;
};

const BackButton = ({ url }: BackButtonProps) => {
  return (
    <div className='w-fit'>
      <Link href={url} passHref>
        <div className='flex gap-1 w-max hover:gap-2 items-center pb-5 transition-all duration-300 font-medium text-neutral-600 dark:text-neutral-400'>
          <Icon glyph='back' size={32} data-testid='back-icon' />
          <span>Back</span>
        </div>
      </Link>
    </div>
  );
};

export default BackButton;
