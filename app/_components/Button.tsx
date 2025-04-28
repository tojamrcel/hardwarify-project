import Link from "next/link";
import { ReactNode } from "react";

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
      <Link
        href={link}
        className="rounded-md bg-red-600 px-5 py-3 font-semibold text-stone-100 transition-colors duration-150 hover:bg-red-700 disabled:bg-slate-300 md:px-3 md:py-1"
      >
        {children}
      </Link>
    );
  if (type === "primary" && !link)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className="rounded-md bg-red-600 px-5 py-3 font-semibold text-stone-100 transition-colors duration-150 hover:bg-red-700 disabled:bg-slate-300 md:px-3 md:py-1"
      >
        {children}
      </button>
    );

  if (type === "secondary" && link)
    return (
      <Link
        href={link}
        className="border-b-2 border-transparent px-0.5 pb-[-0.25rem] pt-1 font-semibold text-gray-500 transition-colors duration-100 hover:border-gray-500"
      >
        {children}
      </Link>
    );
  if (type === "secondary" && !link)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className="border-b-2 border-transparent px-0.5 pb-[-0.25rem] pt-1 font-semibold text-gray-500 transition-colors duration-100 hover:border-gray-500"
      >
        {children}
      </button>
    );
}

export default Button;
