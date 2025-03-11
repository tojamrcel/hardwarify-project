"use client";

import { useCart } from "@/app/_components/CartContext";
import InputErrorMessage from "@/app/_components/InputErrorMessage";
import InputRow from "@/app/_components/InputRow";
import SummaryProducts from "@/app/_components/SummaryProducts";
import { createOrderAction } from "@/app/_lib/actions";
import { SHIPPING_COST } from "@/app/_lib/constants";
import { OrderForm } from "@/app/_types/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

function Page() {
  const [error, setError] = useState<string | null>(null);
  const { data } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<OrderForm>();
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const productsPrice = cart.reduce(
    (acc, cur) => acc + cur.regular_price * cur.quantity,
    0,
  );
  const discount = cart.reduce(
    (acc, cur) => acc + Number(cur.discount) * cur.quantity,
    0,
  );
  const totalPrice = productsPrice - discount;
  const isSubmitting = useRef(false);

  async function onSubmit(data: OrderForm) {
    try {
      isSubmitting.current = true;
      await createOrderAction({ ...data, products: cart });
    } catch (err) {
      if (err instanceof Error && !(err.message === "NEXT_REDIRECT"))
        setError(err.message);
    } finally {
      clearCart();
    }
  }

  useEffect(() => {
    if (!cart.length && !isSubmitting.current) router.push("/cart");
    if (data?.user?.email) setValue("email", data.user.email);
  }, [router, cart.length, data?.user?.email, setValue]);

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-700 md:text-4xl">
        Shipping and payment details
      </h2>
      <div className="mt-4 grid w-full grid-cols-1 gap-4 px-4 md:grid-cols-[2fr_1.5fr] md:gap-0">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <InputRow>
            <label
              htmlFor="first_name"
              className="text-md block text-center font-semibold text-gray-500 md:text-left"
            >
              First name
            </label>
            <input
              type="text"
              className="text-md h-10 rounded-md p-2 text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg md:w-2/3"
              placeholder="John"
              {...register("first_name", {
                required: "First name is required.",
                minLength: {
                  value: 3,
                  message: "First name should be at least 3 characters.",
                },
              })}
            />
            {errors.first_name && (
              <InputErrorMessage>{errors.first_name.message}</InputErrorMessage>
            )}
          </InputRow>
          <InputRow>
            <label
              htmlFor="last_name"
              className="text-md block text-center font-semibold text-gray-500 md:text-left"
            >
              Last name
            </label>
            <input
              type="text"
              className="text-md h-10 rounded-md p-2 text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg md:w-2/3"
              placeholder="Kowalski"
              {...register("last_name", {
                required: "Last name is required.",
                minLength: {
                  value: 3,
                  message: "Last name should be at least 3 characters.",
                },
              })}
            />
            {errors.last_name && (
              <InputErrorMessage>{errors.last_name.message}</InputErrorMessage>
            )}
          </InputRow>
          <InputRow>
            <label
              htmlFor="email"
              className="text-md block text-center font-semibold text-gray-500 md:text-left"
            >
              E-mail
            </label>
            <input
              type="email"
              className="text-md h-10 rounded-md p-2 text-gray-700 shadow-sm outline-none transition-all duration-200 focus:shadow-lg md:w-2/3"
              {...register("email", {
                required: "Email is required.",
              })}
            />
            {errors.email && (
              <InputErrorMessage>{errors.email.message}</InputErrorMessage>
            )}
          </InputRow>
          <InputRow>
            <label
              htmlFor="city"
              className="text-md block text-center font-semibold text-gray-500 md:text-left"
            >
              City
            </label>
            <input
              type="text"
              className="text-md h-10 rounded-md p-2 text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg md:w-2/3"
              {...register("city", { required: "City is required." })}
            />
            {errors.city && (
              <InputErrorMessage>{errors.city.message}</InputErrorMessage>
            )}
          </InputRow>

          <InputRow>
            <label
              htmlFor="postal_code"
              className="text-md block text-center font-semibold text-gray-500 md:text-left"
            >
              Postal Code
            </label>
            <input
              type="text"
              className="text-md h-10 rounded-md p-2 text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg md:w-2/3"
              {...register("postal_code", {
                required: "Postal code is required.",
                pattern: {
                  value: /^\d{2}-\d{3}$/,
                  message: "Invalid postal code.",
                },
              })}
            />
            {errors.postal_code && (
              <InputErrorMessage>
                {errors.postal_code.message}
              </InputErrorMessage>
            )}
          </InputRow>

          <InputRow>
            <label
              htmlFor="address"
              className="text-md block text-center font-semibold text-gray-500 md:text-left"
            >
              Address
            </label>
            <input
              type="text"
              className="text-md h-10 rounded-md p-2 text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg md:w-2/3"
              {...register("address", { required: "Address is required." })}
            />
            {errors.address && (
              <InputErrorMessage>{errors.address.message}</InputErrorMessage>
            )}
          </InputRow>
          <button className="mt-2 w-full self-start rounded-md bg-red-600 px-4 py-2 font-semibold text-stone-100 transition-all duration-300 hover:bg-red-700 md:w-auto">
            Order
          </button>
          {error && <p className="text-md text-red-600">{error}</p>}
        </form>
        <div className="row-start-1 md:row-auto">
          <SummaryProducts />
          <p className="text-center text-lg font-bold text-gray-600 md:text-left">
            TOTAL:{" "}
            <span className="font-semibold">{totalPrice + SHIPPING_COST}$</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Page;
