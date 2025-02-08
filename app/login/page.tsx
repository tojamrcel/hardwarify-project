import Link from "next/link";

function Page() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-4xl font-bold text-gray-700">Login</h2>
      <form className="flex flex-col items-center gap-2">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-md font-semibold text-gray-500"
          >
            Login
          </label>
          <input
            type="email"
            name="email"
            className="text-md h-10 w-96 rounded-md p-2 text-center text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg"
            placeholder="jankowalski@mail.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-md font-semibold text-gray-500"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            className="text-md h-10 w-96 rounded-md p-2 text-center text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg"
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <Link
            href="/signup"
            className="underline-offset-3 border-gray-500 text-sm font-semibold text-gray-500 hover:underline"
          >
            I don&apos;t have an account yet
          </Link>

          <button className="ml-auto mt-2 rounded-md bg-red-600 px-4 py-2 font-semibold text-stone-100 transition-all duration-300 hover:bg-red-700">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page;
