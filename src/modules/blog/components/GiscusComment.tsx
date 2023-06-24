import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

interface GiscusComment {
  repo: `${string}/${string}`;
  repoId: string;
  category?: string;
  categoryId?: string;
}

const GiscusComment = ({
  repo,
  repoId,
  category,
  categoryId,
}: GiscusComment) => {
  const { theme } = useTheme();

  return (
    <div className='mt-5 mb-2'>
      <Giscus
        repo={repo}
        repoId={repoId}
        category={category}
        categoryId={categoryId}
        mapping='pathname'
        reactionsEnabled='1'
        emitMetadata='1'
        inputPosition='top'
        theme={theme === 'dark' ? 'transparent_dark' : 'light'}
        lang='en'
        loading='lazy'
      />
    </div>
  );
};

export default GiscusComment;
