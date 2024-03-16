import { AnimatePresence, motion } from 'framer-motion';

import { EDUCATION } from '@/common/constant/education';

import EducationCard from './EducationCard';

const EducationList = () => {
  return (
    <section className='space-y-6'>
      <div className='grid gap-4 md:grid-cols-1'>
        <AnimatePresence>
          {EDUCATION?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <EducationCard {...item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EducationList;
