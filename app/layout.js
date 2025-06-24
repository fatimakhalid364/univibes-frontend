import { Nunito, Rubik } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Script from 'next/script';
import { Organization } from 'schema-dts';
import {localUrl} from '@/constants/urls';

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
  title: "Univibe",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  console.log("local url is", localUrl);
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Univibe',
    url: localUrl,
    logo: `${localUrl}/logo.png`,
    description: 'Univibe provides ethical, personalized and student-first educational guidance.',
    };
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${rubik.variable}`}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgSchema),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
