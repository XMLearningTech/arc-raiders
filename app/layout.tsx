import type { Metadata } from "next";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
