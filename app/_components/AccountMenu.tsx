function AccountMenu() {
  return (
    <nav className="p-4">
      <ul className="flex flex-col gap-4 text-xl text-gray-700">
        <li className="rounded-lg bg-gray-300 p-2 hover:bg-gray-300">
          <a href="#" className="font-semibold">
            General
          </a>
        </li>
        <li className="rounded-lg p-2 hover:bg-gray-300">
          <a href="#">My orders</a>
        </li>
        <li className="rounded-lg p-2 hover:bg-gray-300">
          <a href="#">Previous orders</a>
        </li>
        <li className="rounded-lg p-2 hover:bg-gray-300">
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default AccountMenu;
