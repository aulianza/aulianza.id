import React, { FC } from 'react';

import Contributions from './Contributions';
import CodingActive from './CodingActive';

import Breakline from '@/common/components/elements/Breakline';

import { GITHUB_ACCOUNTS } from '@/common/constant/github';

const Dashboard: FC = () => {
  return (
    <>
      <CodingActive />
      <Breakline className='mt-10 mb-8' />
      <div className='space-y-10'>
        {GITHUB_ACCOUNTS?.filter((account) => account?.is_active).map(
          (account, index) => (
            <Contributions
              key={index}
              username={account?.username}
              type={account?.type}
              endpoint={account?.endpoint}
            />
          )
        )}
      </div>
    </>
  );
};

export default Dashboard;
