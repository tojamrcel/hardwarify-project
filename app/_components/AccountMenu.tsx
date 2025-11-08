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
    <div className="mt-4 p-2 dark:border-gray-600 md:w-full md:p-0">
      <nav className="flex h-full flex-col justify-between md:p-4">
        <ul className="flex flex-col gap-6 text-xl text-gray-700 dark:text-gray-300">
          <li className={`mt-2 rounded-lg`}>
            <Link
              href="/account"
              className={`group flex h-full items-center gap-3 rounded-sm px-3 py-3 transition-all duration-150 hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-4 sm:py-4 md:py-3 ${"/account" === pathname ? "bg-gray-200 font-semibold dark:bg-gray-800" : ""}`}
            >
              <span
                className={`text-3xl sm:text-4xl md:text-2xl ${"/account" === pathname ? "text-red-700" : ""} transition-all duration-150 group-hover:text-red-700`}
              >
                <MdPerson />
              </span>
              <span className="hidden md:block">Profile</span>
            </Link>
          </li>
          <li className={`mt-2 rounded-lg`}>
            <Link
              href="/account/orders"
              className={`group flex h-full items-center gap-3 rounded-sm px-3 py-3 transition-all duration-150 hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-4 sm:py-4 md:py-3 ${pathname.startsWith("/account/orders") ? "bg-gray-200 font-semibold dark:bg-gray-800" : ""}`}
            >
              <span
                className={`text-3xl sm:text-4xl md:text-2xl ${pathname.startsWith("/account/orders") ? "text-red-700" : ""} transition-all duration-150 group-hover:text-red-700`}
              >
                <FaBox />
              </span>
              <span className="hidden md:block">Orders</span>
            </Link>
          </li>
          <li className={`mt-2 rounded-lg`}>
            <Link
              href="/account/pastorders"
              className={`group flex h-full items-center gap-3 rounded-sm px-3 py-3 transition-all duration-150 hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-4 sm:py-4 md:py-3 ${"/account/pastorders" === pathname ? "bg-gray-200 font-semibold dark:bg-gray-800" : ""}`}
            >
              <span
                className={`text-3xl sm:text-4xl md:text-2xl ${"/account/pastorders" === pathname ? "text-red-700" : ""} transition-all duration-150 group-hover:text-red-700`}
              >
                <IoIosCheckbox />
              </span>
              <span className="hidden md:block">Previous orders</span>
            </Link>
          </li>
          <li className={`mt-2 rounded-lg`}>
            <Link
              href="/account/settings"
              className={`group flex h-full items-center gap-3 rounded-sm px-3 py-3 transition-all duration-150 hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-4 sm:py-4 md:py-3 ${"/account/settings" === pathname ? "bg-gray-200 font-semibold dark:bg-gray-800" : ""}`}
            >
              <span
                className={`text-3xl sm:text-4xl md:text-2xl ${"/account/settings" === pathname ? "text-red-700" : ""} transition-all duration-150 group-hover:text-red-700`}
              >
                <IoIosSettings />
              </span>
              <span className="hidden md:block">Settings</span>
            </Link>
          </li>
        </ul>
        <SignOutButton />
      </nav>
    </div>
  );
}

export default AccountMenu;
