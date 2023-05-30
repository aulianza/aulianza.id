import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  icon,
  ...rest
}) => {
  return (
    <button
      className={`flex gap-2 items-center bg-cyan-900 hover:bg-cyan-950 text-white font-medium shadow-md py-2 px-4 rounded-lg transition-all duration-300 ${className}`}
      {...rest}
    >
      {icon && <>{icon}</>}
      {children}
    </button>
  );
};

export default Button;
