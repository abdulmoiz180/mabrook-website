import type { Metadata } from "next";
import { Inter, DM_Sans, Rubik } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mabrook Academy – Online Skills & Income Training Platform",
  description:
    "Mabrook Academy is a professional online learning platform helping students build high-income skills in trading, e-commerce, content creation, AI, and investing.",

  keywords: [
    "Mabrook Academy",
    "online academy",
    "skills training",
    "side income",
    "trading courses",
    "e-commerce training",
    "AI courses",
    "financial education"
  ],

  authors: [{ name: "Muhammad Arshad" }],
  creator: "Mabrook Academy",
  publisher: "Mabrook Academy",

  metadataBase: new URL("https://www.mabrookacademy.com"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Mabrook Academy – Learn Skills That Pay",
    description:
      "Join thousands of students learning practical income-generating skills with Mabrook Academy.",
    url: "https://www.mabrookacademy.com",
    siteName: "Mabrook Academy",
    images: [
      {
        url: "https://www.mabrookacademy.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mabrook Academy",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mabrook Academy – Online Skills & Income Training",
    description:
      "Practical courses in trading, e-commerce, AI, and content creation.",
    images: ["https://www.mabrookacademy.com/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${dmSans.variable} ${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
