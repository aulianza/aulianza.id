import { motion } from 'framer-motion';
import { useState } from 'react';

import { groupContentByChapter } from '@/common/helpers';
import {
  ChapterGroupProps,
  ContentProps,
  MdxFileContentProps,
} from '@/common/types/learn';

import ChapterCard from './ChapterCard';
import LearnSubContentItem from './LearnSubContentItem';

interface ContentListProps {
  sortedSubContents: MdxFileContentProps[];
  content: ContentProps | null;
  title: string;
}

const ContentList = ({
  sortedSubContents,
  content,
  title,
}: ContentListProps) => {
  const contentSlug: string = content?.slug ?? '';

  const groupedContent: Record<string, ChapterGroupProps> =
    groupContentByChapter(sortedSubContents);

  const [openAccordions, setOpenAccordions] = useState<string[]>(() => {
    const groupKeys = Object.keys(groupedContent);
    return groupKeys.length === 1 ? [groupKeys[0]] : [];
  });

  const toggleAccordion = (chapterId: string) => {
    setOpenAccordions((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId],
    );
  };

  return (
    <>
      {sortedSubContents?.length > 0 ? (
        <div className='space-y-4'>
          {Object.entries(groupedContent).map(
            ([chapterId, { chapter_title, contents }], key) => (
              <motion.div
                key={chapterId}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: key * 0.1 }}
              >
                {chapter_title !== 'ungrouped' && (
                  <ChapterCard
                    chapterId={chapterId}
                    chapterTitle={chapter_title}
                    contents={contents}
                    openAccordions={openAccordions}
                    onToggle={toggleAccordion}
                  />
                )}
                {openAccordions.includes(chapterId) && (
                  <div className='flex flex-col gap-3 pb-3'>
                    {contents.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <LearnSubContentItem
                          parent={title}
                          contentSlug={contentSlug}
                          subContentSlug={item?.slug}
                          title={item?.frontMatter?.title as string}
                          language={item?.frontMatter?.language as string}
                          difficulty={item?.frontMatter?.difficulty as string}
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ),
          )}
        </div>
      ) : (
        <div className='flex items-center justify-center py-5'>
          <div className='text-neutral-500'>No Lesson Found.</div>
        </div>
      )}
    </>
  );
};

export default ContentList;
