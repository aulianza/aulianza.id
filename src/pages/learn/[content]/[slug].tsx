import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import loadMdxFiles from '@/common/libs/mdx';
import { MdxFileContentProps } from '@/common/types/learn';
import ContentDetail from '@/modules/learn/components/ContentDetail';
import ContentDetailHeader from '@/modules/learn/components/ContentDetailHeader';

interface ContentDetailPageProps {
  data: MdxFileContentProps;
}

const LearnContentDetailPage: NextPage<ContentDetailPageProps> = ({ data }) => {
  const { content, frontMatter } = data;
  const meta = frontMatter;

  const PAGE_TITLE = meta?.title;

  return (
    <>
      <NextSeo title={`Learn ${meta?.category} : ${PAGE_TITLE} - Ryan Aulia`} />
      <Container data-aos='fade-up'>
        <BackButton />
        <ContentDetailHeader {...meta} />
        {content && <ContentDetail content={content} />}
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
