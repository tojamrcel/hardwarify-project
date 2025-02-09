import InputRow from "@/app/_components/InputRow";

function Page() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-4xl font-bold text-gray-700">
        Shipping and payment details
      </h2>
      <form className="flex flex-col gap-2">
        <InputRow>
          <label
            htmlFor="first_name"
            className="text-md font-semibold text-gray-500"
          >
            First name
          </label>
          <input
            type="text"
            name="first_name"
            className="text-md h-10 w-1/2 rounded-md p-2 text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg"
            placeholder="John"
          />
        </InputRow>
        <InputRow>
          <label
            htmlFor="last_name"
            className="text-md font-semibold text-gray-500"
          >
            Last name
          </label>
          <input
            type="text"
            name="last_name"
            className="text-md h-10 w-1/2 rounded-md p-2 text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg"
            placeholder="Kowalski"
          />
        </InputRow>
        <InputRow>
          <label
            htmlFor="email"
            className="text-md font-semibold text-gray-500"
          >
            E-mail
          </label>
          <input
            type="email"
            name="email"
            className="text-md h-10 w-1/2 rounded-md p-2 text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg"
            placeholder="jankowalski@mail.com"
          />
        </InputRow>
        <InputRow>
          <label htmlFor="city" className="text-md font-semibold text-gray-500">
            City
          </label>
          <input
            type="text"
            name="city"
            className="text-md h-10 w-1/2 rounded-md p-2 text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg"
          />
        </InputRow>
        <InputRow>
          <label
            htmlFor="postal_code"
            className="text-md font-semibold text-gray-500"
          >
            Postal Code
          </label>
          <input
            type="text"
            name="postal_code"
            className="text-md h-10 w-1/2 rounded-md p-2 text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg"
          />
        </InputRow>
        <InputRow>
          <label
            htmlFor="address"
            className="text-md font-semibold text-gray-500"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            className="text-md h-10 w-1/2 rounded-md p-2 text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg"
          />
        </InputRow>
        <button className="mt-2 self-start rounded-md bg-red-600 px-4 py-2 font-semibold text-stone-100 transition-all duration-300 hover:bg-red-700">
          Order
        </button>
      </form>
    </div>
  );
}

export default Page;
