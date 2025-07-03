import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BootstrapClient from "./components/BootstrapClient"; // ⬅️ NEW

export const metadata = { 
  title: "Kodeo Site",
  description: "We are at the forefront of technology",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient /> {/* ✅ Loads Bootstrap JS on client only */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
