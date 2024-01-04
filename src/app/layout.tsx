import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/lib/components/header";
import "./globals.css";
import Footer from "@/lib/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cats Wiki",
  description:
    "A comprehensive wiki dedicated to all things cats. Explore the fascinating world of feline companions, learn about different breeds, care tips, and connect with fellow cat enthusiasts. Meow! 🐈 ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-3 md:px-14 min-h-[100svh] grid grid-rows-[auto_1fr_auto]">
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
