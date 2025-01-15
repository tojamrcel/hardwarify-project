import Link from "next/link";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";

function Header() {
  return (
    <header className="flex h-[70px] w-full items-center gap-10 bg-white-second px-12 shadow-sm">
      <div>
        <Link
          className="text-xl font-semibold tracking-tight text-stone-700"
          href="/"
        >
          hardwarify
        </Link>
      </div>
      <nav className="w-full">
        <ul className="flex items-center gap-8 text-lg text-stone-800 duration-300">
          <li className="transition-colors hover:text-stone-500">
            <Link href="/">Home</Link>
          </li>
          <li className="transition-colors hover:text-stone-500">
            <Link href="/products">Products</Link>
          </li>
          <li className="transition-colors hover:text-stone-500">
            <Link href="/deals">Deals</Link>
          </li>
          <li className="transition-colors hover:text-stone-500">
            <Link href="/about">About</Link>
          </li>
          <li className="ml-auto transition-colors hover:text-stone-500">
            <div className="relative">
              <div className="absolute -top-2 left-6">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-600 p-3 text-xs font-semibold text-stone-200">
                  2
                </p>
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
    </header>
  );
}
export default Header;
