import { NextPage } from 'next';

import Container from '@/common/components/elements/Container';

const OfflinePage: NextPage = () => {
  return (
    <Container
      className='flex flex-col h-full justify-center items-center'
      data-aos='fade-up'
    >
      <h2 className='text-xl lg:text-2xl animate-pulse'>
        Ups, there is no internet connection.
      </h2>
    </Container>
  );
};

export default OfflinePage;
