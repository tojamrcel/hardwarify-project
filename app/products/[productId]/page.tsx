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
          <span className="text-xl font-bold text-gray-700">
            {product.regular_price - Number(product.discount)}$
          </span>
          <div className="flex items-center gap-2">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
