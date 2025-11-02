import AccountMenu from "../_components/AccountMenu";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[calc(100vh-70px)]">
      <section className="grid h-full overflow-clip md:grid-cols-[360px_1fr]">
        <div className="flex h-full justify-center bg-gray-100/90 dark:bg-gray-900/90">
          <AccountMenu />
        </div>
        <div className="overflow-auto p-8">{children}</div>
      </section>
    </div>
  );
}

export default Layout;
