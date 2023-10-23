import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/layouts/navbar/Navbar";
import Modal from "./components/molecules/modals/Modal";

const font = Nunito({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "StayVue",
  description: "Stay Vue",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
