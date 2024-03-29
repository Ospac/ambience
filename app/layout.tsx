import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header";
import { RecoilRootWrapper } from "./lib/recoilRootWrapper";
import Search from "./ui/Search";

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
          <div className="flex flex-col justify-start p-24 min-h-screen bg-400% bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient-moving">
            <Header />
            {children}
          </div>
        </body>
      </html>
    </RecoilRootWrapper>
  );
}
