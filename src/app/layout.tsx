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
  title: "Mabrook Academy | Get a Job & Side Income in 31 Sessions",
  description: "The largest and most prestigious educational platform for money-making skills. Learn investing, trading, e-commerce, content creation, AI, and more in just 60 days.",
  keywords: ["online course", "side income", "trading", "e-commerce", "content creation", "AI", "financial freedom", "Mabrook Academy"],
  authors: [{ name: "Muhammad Arshad" }],
  openGraph: {
    title: "Mabrook Academy | Transform Your Financial Future",
    description: "Join 10,000+ students who have achieved financial freedom. Learn from Muhammad Arshad.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mabrook Academy | Get a Job & Side Income in 31 Sessions",
    description: "Learn investing, trading, e-commerce, content creation, and AI in just 60 days.",
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
