import { GITHUB_ACCOUNTS } from '@/common/constant/github';

import Contributions from './Contributions';

const Dashboard = () => {
  return (
    <>
      {/* <CodingActive />
      <Breakline className='mt-10 mb-8' /> */}
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
