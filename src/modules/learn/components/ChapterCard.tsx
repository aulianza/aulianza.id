import clsx from 'clsx';
import {
  BiSolidChevronDown as ChevronDownIcon,
  BiSolidChevronUp as ChevronUpIcon,
} from 'react-icons/bi';

import { MdxFileContentProps } from '@/common/types/learn';

interface ChapterCardProps {
  chapterId: string;
  chapterTitle: string;
  contents: MdxFileContentProps[];
  openAccordions: string[];
  onToggle: (chapterId: string) => void;
}

const ChapterCard = ({
  chapterId,
  chapterTitle,
  contents,
  openAccordions,
  onToggle,
}: ChapterCardProps) => {
  return (
    <div
      className={clsx(
        'mb-3 flex cursor-pointer select-none items-center justify-between rounded-t-xl px-5 py-3 text-white',
        'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500 to-teal-600 dark:from-teal-900 dark:to-teal-950',
        'transition-all duration-300',
        !openAccordions.includes(chapterId) && 'rounded-b-xl',
      )}
      onClick={() => onToggle(chapterId)}
    >
      <div className=' text-[15px]'>{chapterTitle}</div>
      <div className='flex items-center gap-3'>
        <div className='hidden text-[13px]  md:flex'>
          {contents?.length} Lesson{contents?.length > 1 && 's'}
        </div>
        <div>
          {openAccordions.includes(chapterId) ? (
            <ChevronUpIcon size={18} />
          ) : (
            <ChevronDownIcon size={18} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterCard;
