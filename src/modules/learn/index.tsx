import { motion } from 'framer-motion';

import { ContentProps } from '@/common/types/learn';

import LearnCard from './components/LearnCard';

interface LearnModuleProps {
  contents: ContentProps[];
}

const LearnModule = ({ contents }: LearnModuleProps) => {
  return (
    <div className='grid gap-5 pt-2 sm:grid-cols-2'>
      {contents?.map((content, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <LearnCard {...content} />
        </motion.div>
      ))}
    </div>
  );
};

export default LearnModule;
