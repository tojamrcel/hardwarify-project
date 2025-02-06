function Page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-[auto_1fr] gap-8">
        <img
          src="/person.jpg"
          alt="Profile image"
          className="w-36 rounded-full"
        />
        <div className="flex flex-col justify-center gap-2 text-gray-600">
          <h2 className="text-2xl font-semibold">John Porkey</h2>
          <div className="text-md flex flex-col items-start">
            <button className="font-semibold text-gray-500 underline-offset-[6px] hover:underline">
              Upload new image
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <input
          type="email"
          name="email"
          className="text-md h-10 w-2/3 rounded-md p-2 text-center text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg read-only:focus:shadow-sm"
          placeholder="jankowalski@mail.com"
          readOnly
        />
        <button className="transition-color rounded-md bg-red-600 px-4 py-2 font-semibold text-stone-100 duration-300 hover:bg-red-700">
          Edit
        </button>
      </div>
      <div className="flex gap-2">
        <input
          type="password"
          name="password"
          className="text-md h-10 w-2/3 rounded-md p-2 text-center text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg read-only:focus:shadow-sm"
          value="password"
          readOnly
        />
        <button className="transition-color rounded-md bg-red-600 px-4 py-2 font-semibold text-stone-100 duration-300 hover:bg-red-700">
          Change password
        </button>
      </div>
      <div className="flex gap-2">
        <input
          type="password"
          name="confirmpassword"
          className="text-md h-10 w-2/3 rounded-md p-2 text-center text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg read-only:focus:shadow-sm"
          placeholder="Confirm your password"
          readOnly
        />
      </div>
    </div>
  );
}

export default Page;
