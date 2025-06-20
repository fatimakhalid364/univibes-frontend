import { Nunito, Rubik } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
});

export const metadata = {
  title: "Univibes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${rubik.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
