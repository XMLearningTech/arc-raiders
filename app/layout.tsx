import type { Metadata } from "next";
import Script from "next/script";
import { getDictionary } from '@/i18n/dictionaries'
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://arc-raiders.net'),
  title: {
    default: "ARC Raiders Wiki - Game Guide & Strategy Hub",
    template: "%s | ARC Raiders Wiki"
  },
  description: "Master ARC Raiders with comprehensive guides, beginner tips, weapon reviews, and map strategies. Your complete resource for the extraction shooter by Embark Studios.",
  keywords: ["ARC Raiders", "game guide", "extraction shooter", "Embark Studios", "beginner guide", "weapons", "maps", "PvPvE"],
  authors: [{ name: "ARC Raiders Wiki Team" }],
  creator: "ARC Raiders Wiki",
  publisher: "ARC Raiders Wiki",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = 'en'
  const dict = await getDictionary(lang)

  return (
    <html lang={lang}>
      <body className="bg-dark-bg text-white font-sans antialiased">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-D2B8JR77WV" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', 'G-D2B8JR77WV');
        `}</Script>
        <Navigation lang={lang} dict={dict} />
        <main className="min-h-screen">{children}</main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}
