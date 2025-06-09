import AddToCartButton from "@/app/_components/AddToCartButton";
import { getProductById } from "@/app/_lib/data_service";
import Image from "next/image";
import { FaLock, FaSmile } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const { product_name: name } = await getProductById(Number(productId));

  return {
    title: `${name}`,
  };
}

async function Page({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  const product = await getProductById(Number(productId));

  return (
    <section className="mt-8 flex flex-col items-center gap-24 py-4 md:mt-24 md:gap-32 md:px-4 lg:mt-32 lg:gap-40">
      <section className="mx-auto grid grid-cols-1 gap-16 px-8 md:max-w-[1300px] md:grid-cols-2 lg:gap-32">
        <div className="flex flex-col gap-4 justify-self-center">
          <div className="relative w-fit before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:h-[110%] before:w-[110%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray-200 after:absolute after:left-1/2 after:top-1/2 after:-z-20 after:h-[120%] after:w-[120%] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-gray-300 after:opacity-70 lg:before:h-[120%] lg:before:w-[120%] lg:after:h-[140%] lg:after:w-[140%]">
            <Image
              src={product.image}
              alt={product.product_name}
              width={370}
              height={370}
              className="rounded-lg shadow-sm md:w-80 lg:w-auto"
            />
          </div>
        </div>
        <div className="flex h-full flex-col items-center justify-center gap-4 md:items-start">
          <h2 className="text-center text-4xl font-semibold text-gray-800 md:text-left md:text-3xl lg:text-4xl">
            {product.product_name}
          </h2>
          <div>
            <p className="text-center text-lg text-gray-700 md:text-left">
              {product.description.split(".")[0]}.
            </p>
          </div>
          <div>
            {product.discount ? (
              <>
                <div className="flex justify-center gap-4 text-xl md:justify-start">
                  <span className="text-3xl italic text-gray-700 line-through">
                    {product.regular_price}$
                  </span>
                  <span className="text-3xl text-red-600">
                    {product.regular_price - Number(product.discount)}$
                  </span>
                </div>
              </>
            ) : (
              <span className="text-3xl font-bold text-gray-700">
                {product.regular_price - Number(product.discount)}$
              </span>
            )}
          </div>
          <div>
            {product.availability > 3 && (
              <p className="mb-1 text-center text-green-700 md:text-left">
                Available
              </p>
            )}
            {product.availability === 0 && (
              <p className="mb-1 text-center text-red-600 md:text-left">
                Unavailable
              </p>
            )}
            {product.availability > 0 && product.availability <= 3 && (
              <p className="mb-1 text-center text-yellow-700 md:text-left">
                Only {product.availability} in stock
              </p>
            )}
            <AddToCartButton
              product={product}
              disabled={!Boolean(product.availability)}
            />
          </div>
        </div>
      </section>
      <section className="mx-auto flex max-w-[1300px] flex-col gap-8 px-4 md:px-32 lg:px-16 xl:px-0">
        <h2 className="text-center text-5xl font-semibold text-gray-700">
          Why us?
        </h2>
        <div className="grid gap-16 lg:grid-cols-3 lg:gap-32 lg:py-8 xl:gap-64">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-gray-200">
              <FaHandshake size={128} className="text-gray-700" />
            </div>
            <h3 className="text-center text-4xl font-semibold text-gray-700">
              Warranty
            </h3>
            <p className="text-center text-lg leading-6 text-gray-600 lg:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              ipsa, eligendi harum amet, nesciunt, nobis corporis fuga debitis
              assumenda esse perspiciatis tempora voluptates rerum facere
              dolorum vel perferendis explicabo doloribus.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-gray-200">
              <FaSmile size={128} className="text-gray-700" />
            </div>
            <h3 className="text-center text-4xl font-semibold text-gray-700">
              Satisfaction
            </h3>
            <p className="text-center text-lg leading-6 text-gray-600 lg:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              ipsa, eligendi harum amet, nesciunt, nobis corporis fuga debitis
              assumenda esse perspiciatis tempora voluptates rerum facere
              dolorum vel perferendis explicabo doloribus.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-gray-200">
              <FaLock size={128} className="text-gray-700" />
            </div>
            <h3 className="text-center text-4xl font-semibold text-gray-700">
              Security
            </h3>
            <p className="text-center text-lg leading-6 text-gray-600 lg:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              ipsa, eligendi harum amet, nesciunt, nobis corporis fuga debitis
              assumenda esse perspiciatis tempora voluptates rerum facere
              dolorum vel perferendis explicabo doloribus.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Page;
