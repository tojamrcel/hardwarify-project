import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./_styles/globals.css";

const ralewaySans = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hardwarify — your hardware store",
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
        className={`${ralewaySans.variable} ${ralewaySans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
