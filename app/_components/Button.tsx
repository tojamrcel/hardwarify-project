import Link from "next/link";
import { ReactNode, RefObject } from "react";
import { Button as ButtonCn } from "@/app/_components/ButtonCn";

interface ButtonComponentProps {
  type: "primary" | "secondary";
  link?: string;
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
  ref?: RefObject<HTMLButtonElement | null>;
}

function Button({
  type,
  link,
  onClick,
  children,
  disabled,
  ref,
}: ButtonComponentProps) {
  if (type === "primary" && link)
    return (
      <ButtonCn asChild size="lg">
        <Link href={link}>{children}</Link>
      </ButtonCn>
    );

  if (type === "primary" && !link)
    return (
      <ButtonCn size="lg" onClick={onClick} disabled={disabled} ref={ref}>
        {children}
      </ButtonCn>
    );

  if (type === "secondary" && link)
    return (
      <Link
        href={link}
        className="border-b-2 border-transparent py-1 font-semibold text-gray-500 transition-all duration-150 hover:border-gray-500 dark:border-transparent dark:text-gray-400 dark:hover:border-gray-500"
      >
        {children}
      </Link>
    );
  if (type === "secondary" && !link)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className="border-b-2 border-transparent py-1 font-semibold text-gray-500 transition-all duration-150 hover:border-gray-500 dark:border-transparent dark:text-gray-400 dark:hover:border-gray-500"
      >
        {children}
      </button>
    );
}

export default Button;
