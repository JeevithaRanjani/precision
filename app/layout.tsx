import "./globals.css";
import { ReactNode } from 'react';
import Navbar from "./Component/navbar";
import Footer from "./Component/footer";

export const metadata = {
  title: "High Precision",
  description: "Precision Engineering Company",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* 🔥 HEADER */}
        <Navbar />

        {/* 📄 PAGE CONTENT */}
        <main>{children}</main>

        {/* 🔻 FOOTER */}
        <Footer />

      </body>
    </html>
  );
}