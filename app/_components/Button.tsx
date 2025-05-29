import Link from "next/link";
import { ReactNode } from "react";
import { Button as ButtonMUI } from "@mui/material";

interface ButtonComponentProps {
  type: "primary" | "secondary";
  link?: string;
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}

function Button({
  type,
  link,
  onClick,
  children,
  disabled,
  size,
}: ButtonComponentProps) {
  if (type === "primary" && link)
    return (
      <Link href={link}>
        <ButtonMUI variant="contained" color="error" size={size}>
          <span className="font-semibold">{children}</span>
        </ButtonMUI>
      </Link>
    );
  if (type === "primary" && !link)
    return (
      <ButtonMUI
        variant="contained"
        color="error"
        onClick={onClick}
        disabled={disabled}
        type={onClick ? "button" : "submit"}
        size={size}
      >
        <span className="font-semibold">{children}</span>
      </ButtonMUI>
    );

  if (type === "secondary" && link)
    return (
      <Link
        href={link}
        className="relative px-0.5 pb-[0.1rem] pt-1 font-semibold text-gray-500 transition-colors duration-100 after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-gray-500 after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
      >
        {children}
      </Link>
    );
  if (type === "secondary" && !link)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className="relative px-0.5 pb-[0.1rem] pt-1 font-semibold text-gray-500 transition-colors duration-100 after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-gray-500 after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
      >
        {children}
      </button>
    );
}

export default Button;
