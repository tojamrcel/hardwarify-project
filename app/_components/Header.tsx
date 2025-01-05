import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

function Header() {
  return (
    <header className="bg-white-second flex h-[70px] w-full items-center gap-8 px-12">
      <div>
        <Link href="#">Hardwarify</Link>
      </div>
      <nav className="w-full">
        <ul className="flex items-center gap-8 text-lg text-stone-800 transition-colors hover:text-stone-500">
          <li className="text-stone-800 transition-colors duration-300 hover:text-stone-500">
            <Link href="/">Home</Link>
          </li>
          <li className="text-stone-800 transition-colors duration-300 hover:text-stone-500">
            <Link href="/products">Products</Link>
          </li>
          <li className="text-stone-800 transition-colors duration-300 hover:text-stone-500">
            <Link href="/deals">Deals</Link>
          </li>
          <li className="text-stone-800 transition-colors duration-300 hover:text-stone-500">
            <Link href="/about">About</Link>
          </li>
          <li className="ml-auto text-3xl hover:text-red-600">
            <Link href="/cart">
              <IoCartOutline />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
