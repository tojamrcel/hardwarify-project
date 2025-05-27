"use client";

import Link from "next/link";
import { IoCartOutline, IoMenuOutline, IoPersonOutline } from "react-icons/io5";
import { useCart } from "./CartContext";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@mui/material";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlayEl = overlay?.current;
    function handleCloseMenu() {
      setIsMenuOpen(false);
    }
    if (overlayEl) {
      overlayEl.addEventListener("click", handleCloseMenu);
      return () => overlayEl.removeEventListener("click", handleCloseMenu);
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className="flex h-[70px] w-full items-center gap-4 bg-gray-100 px-6 font-semibold text-gray-700 shadow-sm sm:gap-10 sm:px-12">
        <div className="z-10 lg:w-64">
          <Link
            className="text-2xl font-semibold tracking-tight text-gray-700 transition-all duration-200"
            href="/"
          >
            hardwarify
          </Link>
        </div>
        <button
          onClick={() => setIsMenuOpen((open) => !open)}
          className="transition-color z-10 block text-3xl duration-150 hover:text-gray-500 lg:hidden"
        >
          <IoMenuOutline />
        </button>
        <nav className="z-10 w-full">
          <ul className="flex items-center gap-8 text-lg duration-300">
            <div className="flex w-full justify-center gap-12">
              <li className="hidden transition-colors hover:text-gray-600 lg:block">
                <Link
                  href="/"
                  className={`${pathname === "/" ? "after:scale-x-100" : ""} relative block after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-gray-700 after:transition after:duration-300 after:content-[''] after:hover:scale-x-100`}
                >
                  Home
                </Link>
              </li>
              <li className="hidden transition-colors hover:text-gray-600 lg:block">
                <Link
                  href="/products"
                  className={`${pathname === "/products" ? "after:scale-x-100" : ""} relative block after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-gray-700 after:transition after:duration-300 after:content-[''] after:hover:scale-x-100`}
                >
                  Products
                </Link>
              </li>
              <li className="hidden transition-colors hover:text-gray-600 lg:block">
                <Link
                  href="/deals"
                  className={`${pathname === "/deals" ? "after:scale-x-100" : ""} relative block after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-gray-700 after:transition after:duration-300 after:content-[''] after:hover:scale-x-100`}
                >
                  Deals
                </Link>
              </li>
              <li className="hidden transition-colors hover:text-gray-600 lg:block">
                <Link
                  href="/about"
                  className={`${pathname === "/about" ? "after:scale-x-100" : ""} relative block after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-gray-700 after:transition after:duration-300 after:content-[''] after:hover:scale-x-100`}
                >
                  About
                </Link>
              </li>
            </div>
            <div className="flex w-64 items-center gap-8">
              <li className="ml-auto transition-colors hover:text-gray-600">
                <div className="relative">
                  <Badge
                    color="error"
                    badgeContent={cart.length}
                    overlap="circular"
                  >
                    <Link href="/cart" className="text-4xl">
                      <IoCartOutline />
                    </Link>
                  </Badge>
                </div>
              </li>
              <li className="transition-colors hover:text-gray-600">
                <Link href="/account" className="text-3xl">
                  <IoPersonOutline />
                </Link>
              </li>
            </div>
          </ul>
        </nav>

        {/* MOBILE */}
        <nav
          className={`absolute left-0 top-[70px] w-full ${isMenuOpen ? "translate-y-0" : "-translate-y-[150%]"} z-[5] transform bg-white-second transition-transform lg:hidden`}
        >
          <ul className="flex w-full flex-col gap-2 py-2 text-stone-800 shadow-md">
            <li className="w-full text-xl transition-colors duration-100 hover:text-stone-500">
              <Link className="block py-2 text-center" href="/">
                Home
              </Link>
            </li>
            <li className="w-full border-t-2 text-xl transition-colors duration-100 hover:text-stone-500">
              <Link className="block py-2 text-center" href="/products">
                Products
              </Link>
            </li>
            <li className="w-full border-t-2 text-xl transition-colors duration-100 hover:text-stone-500">
              <Link className="block py-2 text-center" href="/deals">
                Deals
              </Link>
            </li>
            <li className="w-full border-t-2 text-xl transition-colors duration-100 hover:text-stone-500">
              <Link className="block py-2 text-center" href="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {isMenuOpen && (
        <div
          ref={overlay}
          className="fixed z-[4] h-screen max-h-full w-screen max-w-full backdrop-blur-[2px] lg:hidden"
        ></div>
      )}
    </>
  );
}
export default Header;
