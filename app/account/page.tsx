import type { Metadata } from "next";
import AccountMenu from "../_components/AccountMenu";

export const metadata: Metadata = {
  title: "Account",
};

function Page() {
  return (
    <>
      <h2 className="mb-6 text-4xl font-bold text-gray-700">Account</h2>
      <section className="grid grid-cols-[1fr_2.5fr] items-center gap-16">
        <div className="flex h-full flex-col">
          <div className="h-auto rounded-lg bg-white-second">
            <AccountMenu />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-[auto_1fr] gap-8">
            <img
              src="person.jpg"
              alt="Profile image"
              className="w-48 rounded-full"
            />
            <div className="flex flex-col justify-center gap-2 text-gray-600">
              <h2 className="text-2xl font-semibold">Hello John!</h2>
              <div className="flex flex-col text-lg">
                <p>johnpork@samplemail.com</p>
                <p>123 123 123</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
