import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./_components/CartContext";
import { DarkModeProvider } from "./_components/DarkModeContext";
import Header from "./_components/Header";
import "./_styles/globals.css";
import theme from "./_styles/theme";

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
    <html lang="en">
      <body
        className={`${latoSans.className} bg-gray-50 antialiased dark:bg-gray-900`}
      >
        <AppRouterCacheProvider>
          <DarkModeProvider>
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
          </DarkModeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
