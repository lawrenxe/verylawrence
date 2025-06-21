import type { Metadata } from "next";
import "./globals.css";
import { Noto_Serif_SC } from "next/font/google";

export const metadata: Metadata = {
  title: "My Microblog",
  description: "My Microblog",
};

const notoSerif = Noto_Serif_SC({
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={notoSerif.className}>
      <body>
        <div className="container max-w-full min-h-screen bg-white font-notoSerif">
          <div className="mx-auto max-w-xl px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">veryLawrence</h1>
            {children}
          </div>
        </div>

        <footer className="text-center bg-white text-white p-3">
          Copyright {new Date().getFullYear()} | Lawrence
        </footer>
      </body>
    </html>
  );
}
