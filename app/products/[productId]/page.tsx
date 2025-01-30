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
    <section className="mt-8 flex max-h-[120rem] flex-col gap-4">
      <div className="flex items-center justify-evenly gap-8 rounded-lg bg-white-second shadow-md">
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
        <div className="flex w-96 flex-col gap-6 p-4">
          <h2 className="text-4xl font-bold uppercase text-gray-700">
            {product.product_name}
          </h2>
          <p className="text-gray-700">{product.description}</p>
          <div className="flex flex-col">
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
                <div className="flex gap-2 text-xl">
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

          <div className="flex items-center gap-2">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
