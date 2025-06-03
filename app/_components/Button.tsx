import Link from "next/link";
import { ReactNode } from "react";
import { Button as ButtonMUI } from "@mui/material";

interface ButtonComponentProps {
  type: "primary" | "secondary";
  link?: string;
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
}

function Button({
  type,
  link,
  onClick,
  children,
  disabled,
}: ButtonComponentProps) {
  if (type === "primary" && link)
    return (
      <Link href={link}>
        <ButtonMUI variant="contained" color="error">
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
      >
        <span className="font-semibold">{children}</span>
      </ButtonMUI>
    );

  if (type === "secondary" && link)
    return (
      <Link
        href={link}
        className="border-b-2 border-transparent px-0.5 pb-[0.1rem] pt-1 font-semibold text-gray-500 transition-colors duration-100 hover:border-gray-500"
      >
        {children}
      </Link>
    );
  if (type === "secondary" && !link)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className="border-b-2 border-transparent px-0.5 pb-[0.1rem] pt-1 font-semibold text-gray-500 transition-colors duration-100 hover:border-gray-500"
      >
        {children}
      </button>
    );
}

export default Button;
