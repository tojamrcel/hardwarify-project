"use client";

import { useCart } from "@/app/_components/CartContext";
import InputRow from "@/app/_components/InputRow";
import SummaryProducts from "@/app/_components/SummaryProducts";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SHIPPING_COST } from "@/app/_lib/constants";
import { useForm } from "react-hook-form";
import InputErrorMessage from "@/app/_components/InputErrorMessage";
import { useEffect } from "react";

interface OrderForm {
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  postal_code: string;
  address: string;
}

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderForm>();
  const { data } = useSession();
  const { cart } = useCart();
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

  function onSubmit(data: OrderForm) {
    console.log(data);
  }

  useEffect(() => {
    if (!cart.length) router.push("/cart");
  }, [router, cart.length]);

  return (
    <>
      <h2 className="text-4xl font-bold text-gray-700">
        Shipping and payment details
      </h2>
      <div className="mt-4 grid w-full grid-cols-[2fr_1.5fr] px-4">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <InputRow>
            <label
              htmlFor="first_name"
              className="text-md font-semibold text-gray-500"
            >
              First name
            </label>
            <input
              type="text"
              className="text-md h-10 w-2/3 rounded-md p-2 text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg"
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
              className="text-md font-semibold text-gray-500"
            >
              Last name
            </label>
            <input
              type="text"
              className="text-md h-10 w-2/3 rounded-md p-2 text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg"
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
              className="text-md font-semibold text-gray-500"
            >
              E-mail
            </label>
            <input
              type="email"
              className="text-md h-10 w-2/3 rounded-md p-2 text-gray-700 shadow-sm outline-none transition-all duration-200 focus:shadow-lg"
              defaultValue={data?.user?.email ? data.user.email : ""}
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
              className="text-md font-semibold text-gray-500"
            >
              City
            </label>
            <input
              type="text"
              className="text-md h-10 w-2/3 rounded-md p-2 text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg"
              {...register("city", { required: "City is required." })}
            />
            {errors.city && (
              <InputErrorMessage>{errors.city.message}</InputErrorMessage>
            )}
          </InputRow>

          <InputRow>
            <label
              htmlFor="postal_code"
              className="text-md font-semibold text-gray-500"
            >
              Postal Code
            </label>
            <input
              type="text"
              className="text-md h-10 w-2/3 rounded-md p-2 text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg"
              {...register("postal_code", {
                required: "Postal code is required.",
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
              className="text-md font-semibold text-gray-500"
            >
              Address
            </label>
            <input
              type="text"
              className="text-md h-10 w-2/3 rounded-md p-2 text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg"
              {...register("address", { required: "Address is required." })}
            />
            {errors.address && (
              <InputErrorMessage>{errors.address.message}</InputErrorMessage>
            )}
          </InputRow>
          <button className="mt-2 self-start rounded-md bg-red-600 px-4 py-2 font-semibold text-stone-100 transition-all duration-300 hover:bg-red-700">
            Order
          </button>
        </form>
        <div>
          <SummaryProducts />
          <p className="text-lg font-bold text-gray-600">
            TOTAL:{" "}
            <span className="font-semibold">{totalPrice + SHIPPING_COST}$</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Page;
