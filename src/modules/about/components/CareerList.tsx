import { AnimatePresence, motion } from 'framer-motion';

import { CAREERS } from '@/common/constant/careers';

import CareerCard from './CareerCard';

const CareerList = () => {
  return (
    <section className='space-y-6'>
      <div className='grid gap-3 '>
        <AnimatePresence>
          {CAREERS?.map((career, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <CareerCard {...career} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CareerList;
