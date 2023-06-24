import { animate, AnimationPlaybackControls } from 'framer-motion';
import { HTMLProps, useEffect, useRef } from 'react';

interface AnimateCounterProps extends HTMLProps<HTMLSpanElement> {
  total: number;
}

const AnimateCounter = ({ total, ...rest }: AnimateCounterProps) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const initialCount = 0;

  useEffect(() => {
    const count = countRef.current;

    const controls: AnimationPlaybackControls = animate(initialCount, total, {
      duration: 1,
      onUpdate: (value) => {
        if (count) {
          count.textContent = Math.floor(value).toString();
        }
      },
    });

    return () => controls.stop();
  }, [total]);

  return <span {...rest} ref={countRef} />;
};

export default AnimateCounter;
