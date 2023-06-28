import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import Home from '@/modules/home';

interface HomePageProps {
  title: string;
}

const HomePage = ({ title }: HomePageProps) => {
  return (
    <>
      <NextSeo title={title} />
      <Container data-aos='fade-up'>
        <Home />
      </Container>
    </>
  );
};

HomePage.getInitialProps = async () => {
  const title = 'Ryan Aulia - Personal Website';
  return { title };
};

export default HomePage;
