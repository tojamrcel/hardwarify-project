import Link from "next/link";

function Button({
  type,
  link,
  children,
}: {
  type: "primary" | "secondary";
  link?: string;
  children: string;
}) {
  if (type === "primary" && link)
    return (
      <Link
        href={link}
        className="rounded-md bg-red-600 px-4 py-2 font-semibold text-stone-100 transition-colors duration-300 hover:bg-red-700"
      >
        {children}
      </Link>
    );
  if (type === "secondary") return <button></button>;
}

export default Button;
