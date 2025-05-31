import AccountMenu from "../_components/AccountMenu";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto mt-16 max-h-[1000px] max-w-[1600px] px-8">
      <h2 className="mb-6 text-center text-4xl font-bold text-gray-700 md:text-left">
        Account
      </h2>
      <section className="grid h-full gap-16 lg:grid-cols-[1fr_2.5fr]">
        <div className="flex h-full flex-col">
          <div className="h-[1000px] border-r-2">
            <AccountMenu />
          </div>
        </div>
        <div>{children}</div>
      </section>
    </div>
  );
}

export default Layout;
