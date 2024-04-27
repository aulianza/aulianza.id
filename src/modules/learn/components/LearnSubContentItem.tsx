import Link from 'next/link';
import { BiFile as SubContentIcon } from 'react-icons/bi';

import Card from '@/common/components/elements/Card';
import Tooltip from '@/common/components/elements/Tooltip';
import { STACKS } from '@/common/constant/stacks';
import cn from '@/common/libs/cn';
import { SubContentProps } from '@/common/types/learn';

const LearnSubContentItem = ({
  contentSlug,
  subContentSlug,
  title,
  language,
  difficulty = '',
}: SubContentProps) => {
  return (
    <Link href={`/learn/${contentSlug}/${subContentSlug}`}>
      <Card
        className={cn(
          'flex w-full cursor-pointer flex-row items-center justify-between border border-neutral-300 px-5 py-4 dark:border-neutral-900 lg:hover:scale-[102%]',
        )}
      >
        <div className='flex items-center gap-3'>
          <SubContentIcon size={18} className='hidden md:flex' />
          <h5 className=' font-[15px]'>{title}</h5>
        </div>
        <div className='hidden items-center gap-5 md:flex'>
          {difficulty && (
            <Tooltip title={`Difficulty: ${difficulty}`}>
              <div className='rounded-full bg-neutral-200 px-2 py-1 text-xs font-medium text-neutral-500 dark:bg-neutral-700 dark:text-neutral-400'>
                {difficulty}
              </div>
            </Tooltip>
          )}
          {language && <Tooltip title={language}>{STACKS[language]}</Tooltip>}
        </div>
      </Card>
    </Link>
  );
};

export default LearnSubContentItem;
