import { getAllPosts } from "@/utils/getAllPosts";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="w-full flex flex-col gap-y-4">
      {posts
        .filter((post) => {
          return post.title;
        })
        .map((post) => {
          const dateString = new Date(post.publishedAt).toLocaleDateString(
            "zh-CN",
            {
              dateStyle: "short",
            }
          );
          return (
            <div className="w-full flex items-center gap-4 max-sm:px-4">
              <Link
                href={`/posts/${post.slug}`}
                className="font-bold no-underline whitespace-nowrap hover:underline"
              >
                {post.title}
              </Link>

              <div className="flex-grow border-t border-dotted border-black opacity-50" />

              <span className="text-sm font-medium whitespace-nowrap text-gray-600">
                {dateString}
              </span>
            </div>
          );
        })}
    </main>
  );
}
