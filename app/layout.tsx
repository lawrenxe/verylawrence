import type { Metadata } from "next";
import "./globals.css";
import { Noto_Serif_SC } from "next/font/google";
import Image from "next/image";

export const metadata: Metadata = {
  title: "VeryLawrence",
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
      <body className="min-h-dvh">
        <div className="container max-w-full min-h-[calc(100dvh-48px)]  bg-white font-notoSerif">
          <div className="mx-auto max-w-xl px-4 py-8">
            <div className="flex flex-row justify-center sm:justify-end items-end gap-x-2  gap-y-1">
              <Image
                src={"/portrait.png"}
                alt={"portrait"}
                width={150}
                height={150}
                className="w-[150px] "
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-end gap-x-2 mb-16 gap-y-1 ">
              <h1 className="text-4xl font-bold text-black">生活高手</h1>
              <h1 className="text-lg sm:text-3xl font-bold bg-black text-white px-2 py-1 pt-[2px]">
                veryLawrence
              </h1>
            </div>

            {children}
          </div>
        </div>

        <footer className="w-full flex flex-row justify-center items-center  text-black p-3 gap-x-2 min-h-[16px] ">
          <p className="text-sm sm:text-sm font-bold  text-black px-2 pb-[1px]">
            Copyright {new Date().getFullYear()}{" "}
          </p>
          <p className="text-sm sm:text-sm font-bold bg-black text-white px-2 pb-[1px]">
            veryLawrence
          </p>
        </footer>
      </body>
    </html>
  );
}
