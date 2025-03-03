function Page({ params }: { params: { orderId: string } }) {
  const { orderId } = params;

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-700">Order #{orderId}</h1>
    </div>
  );
}

export default Page;
