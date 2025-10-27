"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdPerson } from "react-icons/md";
import SignOutButton from "./SignOutButton";
import { IoIosCheckbox, IoIosSettings } from "react-icons/io";
import { FaBox } from "react-icons/fa6";

function AccountMenu() {
  const pathname = usePathname();

  return (
    <div className="mt-4 w-full dark:border-gray-600">
      <nav className="flex h-full flex-col justify-between md:p-4">
        <ul className="flex-col gap-6 text-xl text-gray-700 dark:text-gray-300 lg:flex">
          <li className={`mt-2 lg:mt-0`}>
            <Link
              href="/account"
              className={`group flex h-full items-center gap-3 rounded-sm px-4 py-3 transition-all duration-150 hover:bg-gray-200 dark:hover:bg-gray-800 ${"/account" === pathname ? "bg-gray-200 font-semibold dark:bg-gray-800" : ""}`}
            >
              <span
                className={`text-2xl ${"/account" === pathname ? "text-red-700" : ""} transition-all duration-150 group-hover:text-red-700`}
              >
                <MdPerson />
              </span>
              Profile
            </Link>
          </li>
          <li className={`mt-2 rounded-lg lg:mt-0`}>
            <Link
              href="/account/orders"
              className={`group flex h-full items-center gap-3 rounded-sm px-4 py-3 transition-all duration-150 hover:bg-gray-200 dark:hover:bg-gray-800 ${"/account/orders" === pathname ? "bg-gray-200 font-semibold dark:bg-gray-800" : ""}`}
            >
              <span
                className={`text-2xl ${"/account/orders" === pathname ? "text-red-700" : ""} transition-all duration-150 group-hover:text-red-700`}
              >
                <FaBox />
              </span>
              Orders
            </Link>
          </li>
          <li className={`mt-2 rounded-lg lg:mt-0`}>
            <Link
              href="/account/pastorders"
              className={`group flex h-full items-center gap-3 rounded-sm px-4 py-3 transition-all duration-150 hover:bg-gray-200 dark:hover:bg-gray-800 ${"/account/pastorders" === pathname ? "bg-gray-200 font-semibold dark:bg-gray-800" : ""}`}
            >
              <span
                className={`text-2xl ${"/account/pastorders" === pathname ? "text-red-700" : ""} transition-all duration-150 group-hover:text-red-700`}
              >
                <IoIosCheckbox />
              </span>
              Previous orders
            </Link>
          </li>
          <li className={`mt-2 rounded-lg lg:mt-0`}>
            <Link
              href="/account/settings"
              className={`group flex h-full items-center gap-3 rounded-sm px-4 py-3 transition-all duration-150 hover:bg-gray-200 dark:hover:bg-gray-800 ${"/account/settings" === pathname ? "bg-gray-200 font-semibold dark:bg-gray-800" : ""}`}
            >
              <span
                className={`text-2xl ${"/account/settings" === pathname ? "text-red-700" : ""} transition-all duration-150 group-hover:text-red-700`}
              >
                <IoIosSettings />
              </span>
              Settings
            </Link>
          </li>
        </ul>
        <SignOutButton />
      </nav>
    </div>
  );
}

export default AccountMenu;
