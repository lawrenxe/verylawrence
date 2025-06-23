import { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我 | VeryLawrence",
  openGraph: {
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "VeryLawrence",
      },
    ],
  },
};

export default async function About() {
  return (
    <main className="w-full flex flex-col gap-y-4">
      <div className="prose bg-white max-w-4xl overflow-x-hidden p-8 border-[1px] border-black rounded-xl">
        <h2>关于我</h2>
        <p>
          写自己太难了，还是写代码比较简单。 Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Magni aperiam, unde itaque accusamus
          expedita optio veniam reprehenderit hic quasi reiciendis earum
          corporis molestias molestiae aspernatur. Minus voluptates dolorum et
          eligendi! 我会补上的。
        </p>
      </div>
    </main>
  );
}
