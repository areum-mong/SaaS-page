import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WriteFlow - 아름 AI와 함께 더 빠르고, 더 잘 쓰세요",
  description: "당신의 아이디어를 아름ai가 완벽한 문장으로 바꿔드립니다. WriteFlow가 당신의 글쓰기를 혁신합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
