"use client";

import { SessionProvider } from "next-auth/react";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <div>{children}</div>
    </SessionProvider>
  );
}

export default Layout;
