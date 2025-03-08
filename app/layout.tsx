import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./_styles/globals.css";
import Header from "./_components/Header";
import { CartProvider } from "./_components/CartContext";
import { Toaster } from "react-hot-toast";

const ralewaySans = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin"],
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
      <body
        className={`${ralewaySans.variable} ${ralewaySans.variable} bg-white-bg antialiased`}
      >
        <CartProvider>
          <Header />
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
