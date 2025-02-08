"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SignOutButton from "./SignOutButton";

const links = [
  {
    name: "General",
    href: "/account",
  },
  {
    name: "My orders",
    href: "/account/orders",
  },
  {
    name: "Previous orders",
    href: "/account/pastorders",
  },
  {
    name: "Settings",
    href: "/account/settings",
  },
];

function AccountMenu() {
  const pathname = usePathname();

  return (
    <nav className="p-4">
      <ul className="flex flex-col gap-4 text-xl text-gray-700">
        {links.map((link) => (
          <li
            className={`rounded-lg p-2 text-gray-700 hover:bg-gray-300 ${link.href === pathname ? "bg-gray-300" : ""}`}
            key={link.href}
          >
            <Link
              href={link.href}
              className={`block ${link.href === pathname ? "font-semibold" : ""}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <SignOutButton />
      </ul>
    </nav>
  );
}

export default AccountMenu;
