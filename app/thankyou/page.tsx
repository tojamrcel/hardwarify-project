import Button from "../_components/Button";

function Page() {
  return (
    <div className="mt-16 flex w-full flex-col items-center justify-center gap-4">
      <h1 className="text-center text-5xl font-bold text-gray-700">
        Thank you!
      </h1>
      <p className="mb-2 text-xl text-gray-600">
        Thank you for placing the order in our shop. You can track your order in
        account page!
      </p>
      <Button type="primary" link="/">
        Go to shop
      </Button>
    </div>
  );
}

export default Page;
