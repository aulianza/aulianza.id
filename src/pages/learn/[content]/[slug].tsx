import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { useEffect, useState } from 'react';
import { SiJavascript } from 'react-icons/si';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import NavigationSection from '@/common/components/elements/NavigationSection';
import { loadMdxFiles } from '@/common/libs/mdx';
import { MdxFileContentProps } from '@/common/types/learn';
import GiscusComment from '@/modules/blog/components/GiscusComment';
import ContentDetail from '@/modules/learn/components/ContentDetail';
import ContentDetailHeader from '@/modules/learn/components/ContentDetailHeader';
import Playground from '@/modules/playground';

interface ContentDetailPageProps {
  data: MdxFileContentProps;
}

interface ContentListItemProps {
  parent_slug: string;
  slug: string;
  title: string;
}

const LearnContentDetailPage: NextPage<ContentDetailPageProps> = ({ data }) => {
  const { content, frontMatter } = data;

  const [contentList, setContentList] = useState<ContentListItemProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [nextTitle, setNextTitle] = useState<string | null>(null);
  const [previousTitle, setPreviousTitle] = useState<string | null>(null);

  const router = useRouter();
  const currentUrl = router.asPath;
  const parts = currentUrl.split('/');
  const parentSlug = parts[2];
  const contentSlug = parts[3];

  const meta = frontMatter;
  const isShowPlayground = meta?.is_playground ?? false;
  const isShowComment = meta?.is_comment ?? false;
  const initialCode = meta?.initial_code ?? '';

  const PAGE_TITLE = meta?.title;
  const PAGE_DESCRIPTION = `Learn ${meta?.category} - ${PAGE_TITLE} with detailed explanations`;

  const handleNext = () => {
    if (currentIndex < contentList.length - 1) {
      const nextIndex = currentIndex + 1;
      const nextTitle = contentList[nextIndex].title;

      setCurrentIndex(nextIndex);
      setNextTitle(nextTitle);

      window.scrollTo({ top: 0, behavior: 'smooth' });

      router.push(`/learn/${parentSlug}/${contentList[nextIndex].slug}`);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const previousIndex = currentIndex - 1;
      const previousTitle = contentList[previousIndex].title;

      setCurrentIndex(previousIndex);
      setPreviousTitle(previousTitle);

      window.scrollTo({ top: 0, behavior: 'smooth' });

      router.push(`/learn/${parentSlug}/${contentList[previousIndex].slug}`);
    }
  };

  useEffect(() => {
    const fetchContentList = async () => {
      try {
        const response = await fetch(`/api/content?category=${parentSlug}`);
        const data = await response.json();

        if (data && data?.data) {
          setContentList(data?.data);

          const index = data.data.findIndex(
            (item: { slug: string }) => item.slug === contentSlug
          );

          setCurrentIndex(index);

          if (index > 0) {
            setPreviousTitle(data.data[index - 1].title);
          }

          if (index < data.data.length - 1) {
            setNextTitle(data.data[index + 1].title);
          }
        }
      } catch (error) {
        // console.error('aulianza: Error fetching content list:', error);
      }
    };

    fetchContentList();
  }, [parentSlug, contentSlug]);

  return (
    <>
      <NextSeo
        title={`Learn ${meta?.category} : ${PAGE_TITLE} - Ryan Aulia`}
        description={PAGE_DESCRIPTION}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: meta?.updated_at,
            modifiedTime: meta?.updated_at,
            authors: ['Ryan Aulia'],
          },
          images: [
            {
              url: meta?.cover_url as string,
            },
          ],
          siteName: 'Ryan Aulia',
        }}
      />
      <Container data-aos='fade-up' className='mb-20'>
        <BackButton url={`/learn/${parentSlug}`} />
        <ContentDetailHeader {...meta} />
        {content && (
          <>
            <ContentDetail content={content} />
            <NavigationSection
              currentIndex={currentIndex}
              totalItems={contentList.length}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              previousTitle={previousTitle}
              nextTitle={nextTitle}
            />
            {isShowPlayground && (
              <div>
                <div className='flex items-center gap-3 mb-5'>
                  <SiJavascript size={22} className='text-yellow-400' />
                  <h5 className='text-lg font-medium'>JavaScript Playground</h5>
                </div>
                <Playground initialCode={initialCode} />
              </div>
            )}
            {isShowComment && (
              <section
                id='comments'
                className='border-t dark:border-neutral-700 border-gray-300 my-10'
              >
                <GiscusComment />
              </section>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default LearnContentDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const parentContent = params?.content as string;
  const slug = params?.slug as string;

  const contentList = await loadMdxFiles(parentContent);

  const contentData = contentList.find((item) => item.slug === slug);

  if (!contentData) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: contentData,
    },
  };
};
