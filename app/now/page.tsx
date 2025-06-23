import Post from "@/components/Post";
import { getAllNowPosts } from "@/utils/getAllPosts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "当下 | VeryLawrence",
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

export default async function About() {
  const posts = await getAllNowPosts();
  return (
    <main className="w-full flex flex-col gap-y-4">
      {posts.map((post, index) => (
        <div className="w-full flex flex-row" key={index}>
          <Post key={post.slug} post={post} />
        </div>
      ))}
    </main>
  );
}
