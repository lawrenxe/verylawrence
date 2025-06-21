import Post from "@/components/Post";
import { getAllPosts } from "@/utils/getAllPosts";
import { RiSeparator } from "react-icons/ri";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className="w-full flex flex-col gap-y-4">
      {posts.map((post) => (
        <div className="w-full flex flex-row">
          <Post key={post.slug} post={post} />
        </div>
      ))}
    </main>
  );
}
