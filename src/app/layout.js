import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Lábi Africa - Premium Heritage Streetwear",
  description: "Reimagining heritage through the lens of modern luxury. Handcrafted in Nigeria.",
};

import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
      </head>
      <body className={`${spaceGrotesk.variable} ${manrope.variable} font-body bg-background text-foreground antialiased`}>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="min-h-screen w-full">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
