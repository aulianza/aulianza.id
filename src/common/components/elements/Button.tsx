import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}

const Button = ({ children, className = '', icon, ...rest }: ButtonProps) => {
  return (
    <button
      className={`flex gap-2 items-center bg-neutral-500 hover:bg-neutral-600 dark:bg-neutral-600 dark:hover:bg-neutral-700 text-neutral-50 py-2 px-4 rounded-lg transition-all duration-300 text-[15px] font-sora ${className}`}
      {...rest}
    >
      {icon && <>{icon}</>}
      {children}
    </button>
  );
};

export default Button;
