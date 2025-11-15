"use client";

import { useCart } from "@/app/_components/CartContext";
import InputErrorMessage from "@/app/_components/InputErrorMessage";
import InputRow from "@/app/_components/InputRow";
import SummaryProducts from "@/app/_components/SummaryProducts";
import { createOrderAction } from "@/app/_lib/actions";
import { SHIPPING_COST } from "@/app/_lib/constants";
import { createClient } from "@/app/_lib/supabase/client";
import { OrderForm } from "@/app/_types/types";
import Button from "@/app/_components/Button";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Label from "@/app/_components/Label";

function Page() {
  const [user, setUser] = useState<User | null>(null);

  const [error, setError] = useState<string | null>(null);
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
    async function fetchUser() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    }

    fetchUser();
  }, []);

  useEffect(() => {
    if (!cart.length && !isSubmitting.current) router.push("/cart");
    if (user?.email) setValue("email", user?.email);
  }, [router, cart.length, user?.email, setValue]);

  return (
    <div className="mx-auto lg:max-w-[1100px]">
      <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-200 md:text-4xl">
        Shipping and payment details
      </h2>
      <div className="mt-4 grid w-full grid-cols-1 gap-4 px-4 md:grid-cols-[2fr_1.5fr] md:gap-0">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <InputRow>
            <Label htmlFor="first_name">First name</Label>
            <div className="md:w-2/3">
              <input
                type="text"
                className="h-10 w-full rounded-md border-2 px-4 text-gray-600 transition-colors duration-200 placeholder:italic focus:border-red-700 focus:outline-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:shadow-md focus:dark:border-red-800"
                placeholder="Jan"
                {...register("first_name", {
                  required: "First name is required.",
                  minLength: {
                    value: 3,
                    message: "First name should be at least 3 characters.",
                  },
                })}
              />
            </div>
            {errors.first_name && (
              <InputErrorMessage>{errors.first_name.message}</InputErrorMessage>
            )}
          </InputRow>
          <InputRow>
            <Label htmlFor="last_name">Last name</Label>
            <div className="md:w-2/3">
              <input
                type="text"
                className="h-10 w-full rounded-md border-2 px-4 text-gray-600 transition-colors duration-200 placeholder:italic focus:border-red-700 focus:outline-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:shadow-md focus:dark:border-red-800"
                placeholder="Kowalski"
                {...register("last_name", {
                  required: "Last name is required.",
                  minLength: {
                    value: 3,
                    message: "Last name should be at least 3 characters.",
                  },
                })}
              />
            </div>
            {errors.last_name && (
              <InputErrorMessage>{errors.last_name.message}</InputErrorMessage>
            )}
          </InputRow>
          <InputRow>
            <Label htmlFor="email">E-mail</Label>
            <div className="md:w-2/3">
              <input
                type="email"
                className="h-10 w-full rounded-md border-2 px-4 text-gray-600 transition-colors duration-200 placeholder:italic focus:border-red-700 focus:outline-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:shadow-md focus:dark:border-red-800"
                placeholder="jan@gmail.com"
                {...register("email", {
                  required: "Email is required.",
                })}
              />
            </div>
            {errors.email && (
              <InputErrorMessage>{errors.email.message}</InputErrorMessage>
            )}
          </InputRow>
          <InputRow>
            <Label htmlFor="city">City</Label>
            <div className="md:w-2/3">
              <input
                type="text"
                className="h-10 w-full rounded-md border-2 px-4 text-gray-600 transition-colors duration-200 placeholder:italic focus:border-red-700 focus:outline-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:shadow-md focus:dark:border-red-800"
                {...register("city", { required: "City is required." })}
              />
            </div>
            {errors.city && (
              <InputErrorMessage>{errors.city.message}</InputErrorMessage>
            )}
          </InputRow>

          <InputRow>
            <Label htmlFor="postal-code">Postal code</Label>
            <div className="md:w-2/3">
              <input
                type="text"
                className="h-10 w-full rounded-md border-2 px-4 text-gray-600 transition-colors duration-200 placeholder:italic focus:border-red-700 focus:outline-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:shadow-md focus:dark:border-red-800"
                placeholder="00-000"
                {...register("postal_code", {
                  required: "Postal code is required.",
                  pattern: {
                    value: /^\d{2}-\d{3}$/,
                    message: "Invalid postal code.",
                  },
                })}
              />
            </div>
            {errors.postal_code && (
              <InputErrorMessage>
                {errors.postal_code.message}
              </InputErrorMessage>
            )}
          </InputRow>

          <InputRow>
            <Label htmlFor="address">Address</Label>
            <div className="md:w-2/3">
              <input
                type="text"
                className="h-10 w-full rounded-md border-2 px-4 text-gray-600 transition-colors duration-200 placeholder:italic focus:border-red-700 focus:outline-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:shadow-md focus:dark:border-red-800"
                {...register("address", { required: "Address is required." })}
              />
            </div>
            {errors.address && (
              <InputErrorMessage>{errors.address.message}</InputErrorMessage>
            )}
          </InputRow>
          <div className="mb-4">
            <Button type="primary">Order</Button>
          </div>
          {error && <p className="text-md text-red-600">{error}</p>}
        </form>
        <div className="row-start-1 md:row-auto">
          <SummaryProducts />
          <p className="text-center text-xl font-semibold text-gray-600 dark:text-gray-300 md:text-left">
            Total: <span>{totalPrice + SHIPPING_COST}$</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
