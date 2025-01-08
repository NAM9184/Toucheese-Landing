import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Toucheese",
  description: "소개페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${roboto.variable}`}>
      <body className="font-pretendard">{children}</body>
    </html>
  );
}
