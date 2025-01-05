import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./_styles/globals.css";
import Header from "./_components/Header";

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
        <Header />
        <main className="mx-auto max-w-7xl py-8">{children}</main>
      </body>
    </html>
  );
}
