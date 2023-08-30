import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  [propName: string]: unknown;
}

const Card = ({ children, className = '', ...others }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-xl transition-all duration-300 shadow-sm lg:hover:shadow-md ${className} `}
      {...others}
    >
      {children}
    </div>
  );
};

export default Card;
