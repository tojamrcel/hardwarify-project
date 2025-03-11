"use client";

import Link from "next/link";
import { IoCartOutline, IoMenuOutline, IoPersonOutline } from "react-icons/io5";
import { useCart } from "./CartContext";
import { useEffect, useRef, useState } from "react";

function Header() {
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
      <header className="flex h-[70px] w-full items-center gap-4 bg-white-second px-6 shadow-sm sm:gap-10 sm:px-12">
        <div className="z-10">
          <Link
            className="text-xl font-semibold tracking-tight text-stone-700 transition-all duration-200 hover:text-[1.35rem]"
            href="/"
          >
            hardwarify
          </Link>
        </div>
        <button
          onClick={() => setIsMenuOpen((open) => !open)}
          className="transition-color z-10 block text-3xl duration-150 hover:text-stone-500 lg:hidden"
        >
          <IoMenuOutline />
        </button>
        <nav className="z-10 w-full">
          <ul className="flex items-center gap-8 text-lg text-stone-800 duration-300">
            <li className="hidden transition-colors hover:text-stone-500 lg:block">
              <Link href="/">Home</Link>
            </li>
            <li className="hidden transition-colors hover:text-stone-500 lg:block">
              <Link href="/products">Products</Link>
            </li>
            <li className="hidden transition-colors hover:text-stone-500 lg:block">
              <Link href="/deals">Deals</Link>
            </li>
            <li className="hidden transition-colors hover:text-stone-500 lg:block">
              <Link href="/about">About</Link>
            </li>
            <li className="ml-auto transition-colors hover:text-stone-500">
              <div className="relative">
                <div className="absolute -top-2 left-6">
                  {cart.length ? (
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-600 p-3 text-xs font-semibold text-stone-200">
                      {cart.length}
                    </p>
                  ) : null}
                </div>
                <Link href="/cart" className="text-4xl">
                  <IoCartOutline />
                </Link>
              </div>
            </li>
            <li className="transition-colors hover:text-stone-500">
              <Link href="/account" className="text-3xl">
                <IoPersonOutline />
              </Link>
            </li>
          </ul>
        </nav>

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
