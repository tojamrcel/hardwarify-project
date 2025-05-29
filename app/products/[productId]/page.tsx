import AddToCartButton from "@/app/_components/AddToCartButton";
import { getProductById } from "@/app/_lib/data_service";
import Image from "next/image";

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
    <section className="mt-24 flex flex-col gap-40">
      <section className="mx-auto grid max-w-[1300px] grid-cols-2 gap-32 px-8">
        <div className="flex flex-col gap-4 justify-self-center">
          <div className="relative w-fit before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:h-[120%] before:w-[120%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray-200 after:absolute after:left-1/2 after:top-1/2 after:-z-20 after:h-[140%] after:w-[140%] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-gray-300 after:opacity-70">
            <Image
              src={product.image}
              alt={product.product_name}
              width={370}
              height={370}
              className="rounded-lg shadow-sm"
            />
          </div>
        </div>
        <div className="flex h-full flex-col justify-center gap-4">
          <h2 className="text-4xl font-semibold text-gray-800">
            {product.product_name}
          </h2>
          <div>
            <p className="text-lg text-gray-700">
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
              <p className="mb-1 text-green-700">Available</p>
            )}
            {product.availability === 0 && (
              <p className="mb-1 text-red-600">Unavailable</p>
            )}
            {product.availability > 0 && product.availability <= 3 && (
              <p className="mb-1 text-yellow-700">
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
      <section>
        <h2 className="text-center text-5xl font-semibold text-gray-700">
          Why us?
        </h2>
      </section>
    </section>
  );
}

export default Page;
