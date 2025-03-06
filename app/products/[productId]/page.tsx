import AddToCartButton from "@/app/_components/AddToCartButton";
import { getProductById } from "@/app/_lib/data_service";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;
  const { product_name: name } = await getProductById(Number(productId));

  return {
    title: `${name}`,
  };
}

async function Page({ params }: { params: { productId: string } }) {
  const { productId } = await params;
  const product = await getProductById(Number(productId));

  return (
    <section className="mt-2 flex flex-col gap-4 md:mt-8 md:max-h-[120rem]">
      <div className="flex flex-col items-center justify-evenly gap-8 rounded-lg bg-white-second shadow-md md:flex-row">
        <div className="flex items-center justify-center px-4 py-4">
          <Image
            src={product.image}
            alt="Iphone 16 Pro"
            width={384}
            height={384}
            className="rounded-lg shadow-md"
            quality={95}
          />
        </div>
        <div className="flex flex-col gap-6 p-4 md:w-96">
          <h2 className="text-center text-3xl font-bold uppercase text-gray-700 md:text-4xl">
            {product.product_name}
          </h2>
          <p className="text-gray-700">{product.description}</p>
          <div className="flex flex-col items-center md:items-start">
            {product.availability > 3 && (
              <p className="text-green-700">Available</p>
            )}
            {product.availability === 0 && (
              <p className="text-red-600">Unavailable</p>
            )}
            {product.availability > 0 && product.availability <= 3 && (
              <p className="text-yellow-700">
                Only {product.availability} in stock
              </p>
            )}
            {product.discount ? (
              <>
                <div className="flex justify-center gap-2 text-xl md:justify-start">
                  <span className="italic text-gray-700 line-through">
                    {product.regular_price}$
                  </span>
                  <span className="text-red-600">
                    {product.regular_price - Number(product.discount)}$
                  </span>
                </div>
              </>
            ) : (
              <span className="text-xl font-bold text-gray-700">
                {product.regular_price - Number(product.discount)}$
              </span>
            )}
          </div>

          <div className="flex items-center justify-center gap-2 md:justify-normal">
            <AddToCartButton
              product={product}
              disabled={!Boolean(product.availability)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
