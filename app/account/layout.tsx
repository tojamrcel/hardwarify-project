import AccountMenu from "../_components/AccountMenu";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[calc(100vh-70px)] overflow-clip">
      <section className="grid h-full gap-4 md:grid-cols-[360px_1fr] lg:gap-16">
        <div className="flex h-full justify-center bg-gray-100/90 dark:bg-gray-900/90">
          <AccountMenu />
        </div>
        <div className="">{children}</div>
      </section>
    </div>
  );
}

export default Layout;
