import Post from "@/components/Post";
import { getAllPosts } from "@/utils/getAllPosts";
import { RiSeparator } from "react-icons/ri";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className="w-full">
      {posts.map((post) => (
        <>
          <Post key={post.slug} post={post} />
          <div className="last:hidden w-full h-fit  flex flex-col justify-center items-center">
            <RiSeparator size={26} />
          </div>
        </>
      ))}
    </main>
  );
}
