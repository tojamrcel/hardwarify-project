import ThankYou from "../../_components/ThankYou";

async function Page({
  params,
}: {
  params: Promise<{
    orderId: string;
  }>;
}) {
  const { orderId } = await params;

  return <ThankYou orderId={orderId} />;
}

export default Page;
