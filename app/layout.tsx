import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./_components/CartContext";
import Header from "./_components/Header";
import "./_styles/globals.css";
import { ThemeProvider } from "./_components/theme-provider";

const latoSans = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Hardwarify — your hardware store",
    template: "%s | Hardwarify",
  },
  description: "Buy mobile devices, consoles and more and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${latoSans.className} bg-gray-50 antialiased dark:bg-gray-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AppRouterCacheProvider>
            <CartProvider>
              <Header />
              <main className="mx-auto pt-[70px]">{children}</main>
              <Toaster
                position="top-center"
                toastOptions={{
                  style: {
                    marginTop: "64px",
                    padding: "16px 32px",
                    fontWeight: "700",
                  },
                  duration: 2000,
                }}
              />
            </CartProvider>
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
