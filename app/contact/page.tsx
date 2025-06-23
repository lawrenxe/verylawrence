import Post from "@/components/Post";
import { getAllPosts, getPostBySlug } from "@/utils/getAllPosts";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaInstagram, FaWeibo } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

export const metadata: Metadata = {
  title: `联系我 | VeryLawrence`,
  metadataBase: new URL("https://www.verylawrence.com"),
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

export const dynamicParams = false;

export default async function PostPage() {
  return (
    <div className="prose bg-white max-w-4xl overflow-x-hidden p-8 border-[1px] border-black rounded-xl">
      <h2>关于我</h2>
      <ul>
        <li>我叫 Lawrence, 是一个生活在墨尔本的全栈开发者，喜欢衬线字体。 </li>
        <li>我喜欢观察身边的人，喜欢揣测人的心思，包括自己的。 </li>
        <li>「生活高手」是我用了很久的朋友圈签名。</li>
        <li>我在这里练习人物写生。</li>
      </ul>
      <h2>To Connect</h2>
      <p>
        我是用 GitHub Page
        部署的静态博客，因此没有开放评论，也不知道未来会不会有精力添加这个功能。
      </p>
      <p>
        <strong>但我很想知道你经过这里时的眼神</strong>
        ，所以欢迎你通过下面的方式与我连结。
      </p>
      <div className="flex flex-row gap-x-4 justify-start items-center text-2xl">
        <Link href={"https://weibo.com/u/1768462230"} target="_blank">
          <FaWeibo />
        </Link>
        <Link href={"https://www.instagram.com/lawrenxew/"} target="_blank">
          <FaInstagram />
        </Link>
        <Link href={"https://www.threads.com/@lawrenxew"} target="_blank">
          <FaThreads />
        </Link>
      </div>
    </div>
  );
}
