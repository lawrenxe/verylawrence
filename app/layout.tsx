import BackToTop from "@/components/BackToTop";
import { Noto_Serif_SC } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

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
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-end gap-x-2  gap-y-1 sticky -top-12 sm:top-0 bg-white z-10 pb-2 pt-2">
              <Link href="/" className="text-4xl font-bold text-black">
                <h1>生活高手</h1>
              </Link>
              <Link
                href={"/"}
                className="text-lg sm:text-3xl font-bold bg-black text-white px-2 py-1 pt-[2px]"
              >
                veryLawrence
              </Link>
            </div>
            <div className="flex flex-row sm:justify-end justify-center items-center gap-x-4 mb-12">
              <Link className=" hover:underline" href="/post">
                目录
              </Link>
              <p>/</p>
              <Link className=" hover:underline" href="/now">
                当下
              </Link>
              {/* <p>/</p>
              <Link className=" hover:underline" href="/contact">
                联系我
              </Link> */}
            </div>

            {children}
          </div>
        </div>

        <footer className="w-full flex flex-row justify-center items-center  text-black pb-12 gap-x-2 min-h-[16px] ">
          <p className="text-sm sm:text-sm font-bold  text-black px-2 pb-[1px]">
            Copyright {new Date().getFullYear()}{" "}
          </p>

          <BackToTop>
            <p className="text-sm sm:text-sm font-bold bg-black text-white px-2 pb-[1px]">
              veryLawrence
            </p>
          </BackToTop>
        </footer>
      </body>

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NFTW0Y5RJB"
      ></script>
      <script>
        {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-NFTW0Y5RJB');
`}
      </script>
    </html>
  );
}
