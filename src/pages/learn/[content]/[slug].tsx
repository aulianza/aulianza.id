import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { SiJavascript } from 'react-icons/si';

import BackButton from '@/common/components/elements/BackButton';
import Breakline from '@/common/components/elements/Breakline';
import Container from '@/common/components/elements/Container';
import { loadMdxFiles } from '@/common/libs/mdx';
import { MdxFileContentProps } from '@/common/types/learn';
import GiscusComment from '@/modules/blog/components/GiscusComment';
import ContentDetail from '@/modules/learn/components/ContentDetail';
import ContentDetailHeader from '@/modules/learn/components/ContentDetailHeader';
import Playground from '@/modules/playground';
interface ContentDetailPageProps {
  data: MdxFileContentProps;
}

const LearnContentDetailPage: NextPage<ContentDetailPageProps> = ({ data }) => {
  const { content, frontMatter } = data;

  const meta = frontMatter;

  const PAGE_TITLE = meta?.title;
  const PAGE_DESCRIPTION = `Learn ${meta?.category} - ${PAGE_TITLE} with detailed explanations`;

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
      <Container data-aos='fade-up'>
        <BackButton />
        <ContentDetailHeader {...meta} />
        {content && (
          <>
            <ContentDetail content={content} />
            <Breakline className='my-6' />
            <div className='space-y-6'>
              <div className='flex items-center gap-3'>
                <SiJavascript size={22} className='text-yellow-400' />
                <h5 className='text-lg font-medium'>JavaScript Playground</h5>
              </div>
              <Playground />
            </div>
            <Breakline className='mt-14 mb-14' />
            <section id='comments'>
              <GiscusComment />
            </section>
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
