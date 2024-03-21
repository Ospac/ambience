import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header";
import { RecoilRootWrapper } from "./lib/recoilRootWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ambience",
  description: "소리 위에 유영하기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRootWrapper>
      <html lang="en">
        <body className={inter.className}>
          <div>
              {children}
          </div>
        </body>
      </html>
    </RecoilRootWrapper>
  );
}
