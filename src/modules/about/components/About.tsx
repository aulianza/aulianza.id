import React, { FC } from 'react';

import CareerList from './CareerList';
import Story from './Story';

import Breakline from '@/common/components/elements/Breakline';

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
