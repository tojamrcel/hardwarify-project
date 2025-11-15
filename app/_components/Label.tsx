import { ReactNode } from "react";

function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-lg font-semibold text-gray-700 dark:text-gray-300"
    >
      {children}
    </label>
  );
}

export default Label;
