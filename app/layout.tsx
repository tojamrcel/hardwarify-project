import type { Metadata } from "next";
import Link from "next/link";
import { Raleway } from "next/font/google";
import "./_styles/globals.css";

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
        <header className="bg-white-second flex h-[70px] items-center gap-8 px-12">
          <div>
            <Link href="#">Hardwarify</Link>
          </div>
          <nav>
            <ul className="flex gap-8 text-lg">
              <li className="text-stone-800 hover:text-stone-500">
                <Link href="/">Home</Link>
              </li>
              <li className="text-stone-800 hover:text-stone-500">
                <Link href="/">Products</Link>
              </li>
              <li className="text-stone-800 hover:text-stone-500">
                <Link href="/">Deals</Link>
              </li>
              <li className="text-stone-800 hover:text-stone-500">
                <Link href="/">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
