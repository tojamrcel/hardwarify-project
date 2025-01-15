import type { Metadata } from "next";
import {
  IoGameControllerOutline,
  IoHeadsetOutline,
  IoLaptopOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";

export const metadata: Metadata = {
  title: "About",
};

function Page() {
  return (
    <section className="m-auto flex max-w-5xl flex-col items-center justify-center gap-4">
      <h2 className="border-b-[3px] border-gray-700 px-2 py-2 text-center text-4xl font-bold uppercase text-gray-700">
        About us
      </h2>
      <p className="mt-2 text-center text-xl text-gray-700">
        Welcome to <strong>Hardwarify</strong>, your trusted partner for
        high-quality mobile devices and hardware. We specialize in sourcing and
        offering products from leading technology brands, making advanced
        technology accessible to everyone.
      </p>
      <p className="mt-4 text-center text-xl text-gray-700">
        At <strong>Hardwarify</strong>, we are a passionate team dedicated to
        connecting people with the best devices the tech world has to offer. Our
        mission is to provide a seamless shopping experience by offering a
        curated selection of premium products from top manufacturers, ensuring
        our customers have access to the tools they need to stay connected,
        productive, and entertained.
      </p>
      <div className="mt-8 flex items-center justify-center gap-10">
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white-second text-6xl">
          <IoPhonePortraitOutline />
        </div>
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white-second text-6xl">
          <IoGameControllerOutline />
        </div>
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white-second text-6xl">
          <IoLaptopOutline />
        </div>
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white-second text-6xl">
          <IoHeadsetOutline />
        </div>
      </div>
    </section>
  );
}

export default Page;
