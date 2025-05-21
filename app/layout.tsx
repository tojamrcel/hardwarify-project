import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./_styles/globals.css";
import Header from "./_components/Header";
import { CartProvider } from "./_components/CartContext";
import { Toaster } from "react-hot-toast";

const latoSans = Lato({
  subsets: ["latin"],
  weight: "700",
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
    <html lang="en">
      <body className={`${latoSans.className} bg-white-bg antialiased`}>
        <CartProvider>
          <Header />
          <div className="w-full py-2">
            <p className="-mt-2 bg-slate-200 text-center text-lg font-semibold text-gray-600">
              👋 FOR DEMO VERSION OF APP SOME API FEATURES HAVE BEEN DISABLED
            </p>
          </div>
          <main className="mx-auto max-w-7xl px-6 py-8">{children}</main>
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                marginTop: "64px",
                padding: "16px 32px",
              },
              duration: 2000,
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}
