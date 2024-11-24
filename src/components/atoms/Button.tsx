import React from "react";
import { cn } from "../../utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
  }
const Button = ({
  children,
  className,
  onClick,
  disabled,
  type,
}: ButtonProps) => {
  return (
    <>
      <button
        className={cn(
          "block bg-bpyellowdark text-nowrap  text-[.75rem] md:text-paragtextM rounded-[20px] transition-shadow",
          className,
        )}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
