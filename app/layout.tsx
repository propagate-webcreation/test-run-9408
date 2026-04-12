import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "志田洋二",
  description: "新規顧客獲得",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
