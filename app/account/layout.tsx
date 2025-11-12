import AccountMenu from "../_components/AccountMenu";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[calc(100dvh-70px)]">
      <section className="grid h-full grid-cols-[auto_1fr] overflow-clip md:grid-cols-[260px_1fr] lg:grid-cols-[360px_1fr]">
        <div className="flex justify-center bg-gray-100/90 dark:bg-gray-900/90">
          <AccountMenu />
        </div>
        <div className="overflow-auto p-8">{children}</div>
      </section>
    </div>
  );
}

export default Layout;
