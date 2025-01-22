import { getProductById } from "@/app/_lib/data_service";
import Image from "next/image";

async function Page({ params }: { params: { productId: string } }) {
  const { productId } = await params;
  const {
    product_name: name,
    description,
    regular_price: regularPrice,
    discount,
    image,
  } = await getProductById(Number(productId));

  return (
    <section className="mt-8 flex max-h-[120rem] flex-col gap-4">
      <div className="flex items-center justify-evenly gap-8 rounded-lg bg-white-second shadow-md">
        <div className="flex items-center justify-center px-4 py-4">
          <Image
            src={image}
            alt="Iphone 16 Pro"
            width={384}
            height={384}
            className="rounded-lg shadow-md"
            quality={95}
          />
        </div>
        <div className="flex w-96 flex-col gap-6 p-4">
          <h2 className="text-4xl font-bold text-gray-700">{name}</h2>
          <p className="text-gray-700">{description}</p>
          <span className="text-xl font-bold text-gray-700">
            {regularPrice - Number(discount)}$
          </span>
          <div className="flex items-center gap-2">
            <button className="rounded-md bg-red-600 px-3 py-1 font-semibold text-stone-100 transition-colors duration-150 hover:bg-red-700">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
