import Link from "next/link";

function Header() {
  return (
    <header className="bg-white-second flex h-[70px] w-full items-center gap-8 px-12">
      <div>
        <Link href="#">Hardwarify</Link>
      </div>
      <nav>
        <ul className="flex gap-8 text-lg">
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
