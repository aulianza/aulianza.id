import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  [propName: string]: any;
}

const Card = ({ children, className = '', ...others }: CardProps) => {
  return (
    <div
      className={`rounded-xl transition-all duration-300 shadow-sm lg:hover:shadow-md dark:bg-neutral-800 ${className} `}
      {...others}
    >
      {children}
    </div>
  );
};

export default Card;
