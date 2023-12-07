import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/layouts/navbar/Navbar";
import RegisterModal from "./components/molecules/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/molecules/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/molecules/modals/RentModal";
import Footer from "./components/layouts/footer/footer";

const font = Nunito({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "StayVue",
  description: "Stay Vue",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28 min-h-[90vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
