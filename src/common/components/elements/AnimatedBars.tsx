import { motion } from 'framer-motion';

interface AnimatedBarsProps {
  variant?: string;
}

const AnimatedBars = ({ variant = 'bg-neutral-800' }: AnimatedBarsProps) => {
  const color = variant ?? 'bg-neutral-800';

  return (
    <div className='relative flex w-auto items-end overflow-hidden pt-0.5'>
      <motion.span
        animate={{
          scaleY: [1.0, 1.5, 1.0],
          translateY: ['0rem', '-0.082rem', '0rem'],
        }}
        transition={{
          duration: 1,
          easings: 'easeInOut',
          repeat: Infinity,
        }}
        className={`mr-[1px] h-2 w-1 opacity-75 ${color}`}
      />
      <motion.span
        animate={{
          scaleY: [1.0, 3, 1.0],
          translateY: ['0rem', '-0.083rem', '0rem'],
        }}
        transition={{
          duration: 1.5,
          easings: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 0.2,
        }}
        className={`mr-[1px] h-1 w-1 ${color}`}
      />
      <motion.span
        animate={{
          scaleY: [1.0, 1.5, 1.0],
          translateY: ['0rem', '0.37rem', '0rem'],
        }}
        transition={{
          duration: 1,
          easings: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 0.2,
        }}
        className={`mr-[1px] h-3 w-1 opacity-80 ${color}`}
      />

      <motion.span
        animate={{
          scaleY: [1.0, 0.5, 1.0],
          translateY: ['0rem', '0.37rem', '0rem'],
        }}
        transition={{
          duration: 1.5,
          easings: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 0.3,
        }}
        className={`h-3 w-1 ${color}`}
      />
    </div>
  );
};

export default AnimatedBars;
