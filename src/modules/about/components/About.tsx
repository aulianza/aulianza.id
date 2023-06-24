import React, { FC } from 'react';

import Breakline from '@/common/components/elements/Breakline';

import CareerList from './CareerList';
import Story from './Story';

const About: FC = () => {
  return (
    <>
      <Story />
      <Breakline className='my-8' />
      <CareerList />
    </>
  );
};

export default About;
