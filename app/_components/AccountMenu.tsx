import Link from "next/link";

function AccountMenu() {
  return (
    <nav className="p-4">
      <ul className="flex flex-col gap-4 text-xl text-gray-700">
        <li className="rounded-lg bg-gray-300 p-2 text-gray-700 hover:bg-gray-300">
          <Link href="/account" className="block font-semibold">
            Account
          </Link>
        </li>
        <li className="rounded-lg p-2 hover:bg-gray-300">
          <Link href="/account/orders" className="block">
            My orders
          </Link>
        </li>
        <li className="rounded-lg p-2 hover:bg-gray-300">
          <Link href="/account/pastorders" className="block">
            Previous orders
          </Link>
        </li>
        <li className="rounded-lg p-2 hover:bg-gray-300">
          <Link href="/account/settings" className="block">
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AccountMenu;
