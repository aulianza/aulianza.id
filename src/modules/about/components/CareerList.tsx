import { CAREERS } from '@/common/constant/careers';

import CareerCard from './CareerCard';

const CareerList = () => {
  return (
    <section className='space-y-6'>
      <div className='grid gap-3 '>
        {CAREERS?.map((career, index) => (
          <CareerCard key={index} {...career} />
        ))}
      </div>
    </section>
  );
};

export default CareerList;
