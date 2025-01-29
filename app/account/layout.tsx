import AccountMenu from "../_components/AccountMenu";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2 className="mb-6 text-4xl font-bold text-gray-700">Account</h2>
      <section className="grid grid-cols-[1fr_2.5fr] items-center gap-16">
        <div className="flex h-full flex-col">
          <div className="h-auto rounded-lg bg-white-second">
            <AccountMenu />
          </div>
        </div>
        <div>{children}</div>
      </section>
    </>
  );
}

export default Layout;
