import Post from "@/components/Post";
import { getAllPosts, getPostBySlug } from "@/utils/getAllPosts";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // fetch post information
  const post = await getPostBySlug(params.slug);

  return {
    title: `${post?.title} | VeryLawrence`,
  };
}

export const dynamicParams = false;

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  return <Post post={post} />;
}
