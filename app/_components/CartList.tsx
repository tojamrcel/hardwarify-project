"use client";

import Image from "next/image";
import Link from "next/link";
import { CartProduct } from "../_types/types";
import { useCart } from "./CartContext";

function CartList() {
  const { cart, setCart } = useCart();

  function handleRemoveItem(productId: number) {
    setCart(() => cart.filter((product) => product.id !== productId));
  }

  return (
    <div className="flex flex-col gap-4 p-4 md:mt-4 md:gap-8">
      {cart.length > 0 &&
        cart.map((prod) => (
          <CartItem
            handleRemove={handleRemoveItem}
            product={prod}
            setCart={setCart}
            key={prod.id}
          />
        ))}
      {cart.length === 0 && (
        <p className="text-2xl leading-6 text-gray-800 md:text-center">
          The cart is empty :(
        </p>
      )}
    </div>
  );
}

function CartItem({
  product,
  handleRemove,
  setCart,
}: {
  product: CartProduct;
  handleRemove: (productId: number) => void;
  setCart(callback: (prevCart: CartProduct[]) => CartProduct[]): void;
}) {
  const {
    id,
    product_name: name,
    regular_price: regularPrice,
    discount,
    image,
    quantity,
  } = product;

  function handleIncreaseQuantity() {
    setCart((cart) => {
      const increasedCart = cart.map((prod) => {
        if (prod.id !== id || prod.availability < prod.quantity + 1)
          return prod;
        return { ...prod, quantity: prod.quantity + 1 };
      });
      return increasedCart;
    });
  }

  function handleDecreaseQuantity() {
    setCart((cart) => {
      const decreasedCart = cart.map((prod) => {
        if (prod.id !== id) return prod;
        return {
          ...prod,
          quantity: prod.quantity === 1 ? prod.quantity : prod.quantity - 1,
        };
      });
      return decreasedCart;
    });
  }

  return (
    <div className="relative grid h-28 max-w-5xl grid-cols-[8rem_3fr] items-center justify-center gap-2 rounded-lg bg-white-second px-2 py-2 md:gap-4 md:px-4 lg:h-auto">
      <Image
        src={image}
        alt={name}
        height={96}
        width={96}
        className="w-20 self-center justify-self-center rounded-md shadow-sm"
      />
      <div>
        <p className="font-semibold text-gray-700 md:text-lg">{name}</p>
        <div className="flex items-center gap-2 text-gray-700">
          <button
            onClick={() => handleDecreaseQuantity()}
            className="flex items-center justify-center font-bold"
          >
            -
          </button>
          <input
            type="number"
            className="mt-1 h-6 w-6 rounded-lg px-1 py-0.5 text-center font-semibold text-gray-700 focus:outline-none"
            value={quantity}
            readOnly
          />
          <button
            onClick={() => handleIncreaseQuantity()}
            className="flex items-center justify-center font-bold"
          >
            +
          </button>
          {discount ? (
            <>
              <div className="flex gap-2">
                <p className="ml-2 italic line-through">
                  ${regularPrice * quantity}
                </p>
                <span className="text-red-600">
                  ${(regularPrice - Number(discount)) * quantity}
                </span>
              </div>
            </>
          ) : (
            <p className="ml-2">${regularPrice * quantity}</p>
          )}
        </div>
        <button
          onClick={() => handleRemove(id)}
          className="absolute right-2 top-0 text-2xl text-gray-700"
        >
          &times;
        </button>
        <Link
          href={`/products/${id}`}
          className="absolute bottom-2 right-2 border-b-2 border-transparent px-0.5 pb-[-0.25rem] pt-1 font-semibold text-stone-500 transition-colors duration-100 hover:border-stone-500"
        >
          Go to product
        </Link>
      </div>
    </div>
  );
}

export default CartList;
