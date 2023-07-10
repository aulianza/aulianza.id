import Link from 'next/link';
import { BiFile as SubContentIcon } from 'react-icons/bi';

import Card from '@/common/components/elements/Card';
import Tooltip from '@/common/components/elements/Tooltip';
import { STACKS } from '@/common/constant/stacks';
import clsxm from '@/common/libs/clsxm';
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
        className={clsxm(
          'flex items-center flex-row justify-between cursor-pointer border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800 lg:hover:scale-[102%] w-full py-4 px-5'
        )}
      >
        <div className='flex gap-3 items-center'>
          <SubContentIcon size={18} className='hidden md:flex' />
          <h5>{title}</h5>
        </div>
        <div className='hidden md:flex gap-5 items-center'>
          {difficulty && (
            <Tooltip title={`Difficulty: ${difficulty}`}>
              <div className='px-2 py-1 text-xs font-medium rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400'>
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
