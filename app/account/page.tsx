import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
};

function Page() {
  return (
    <div className="flex h-full flex-col justify-center">
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
  );
}

export default Page;
