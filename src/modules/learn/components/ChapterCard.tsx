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
        'flex justify-between items-center cursor-pointer py-3 px-5 mb-3 rounded-t-xl text-white select-none',
        'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-500 to-sky-600 dark:from-sky-800 dark:to-sky-900',
        'transition-all duration-300',
        !openAccordions.includes(chapterId) && 'rounded-b-xl'
      )}
      onClick={() => onToggle(chapterId)}
    >
      <div className='font-sora text-[15px]'>{chapterTitle}</div>
      <div className='flex items-center gap-3'>
        <div className='hidden md:flex  text-[13px]'>
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
