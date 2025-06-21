import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "content");

export type Post = {
  title?: string;
  publishedAt: string;
  slug: string;
  mdContent: string;
};

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"));

  const postPromises: Promise<Post>[] = fileNames.map(async (fileName) => {
    const filePath = path.join(contentDir, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      title: data.title,
      publishedAt: data.publishedAt,
      slug: fileName.replace(/\.md$/, ""),
      mdContent: contentHtml,
    };
  });

  const posts = await Promise.all(postPromises);

  posts.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });

  return posts;
}
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(contentDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    title: data.title,
    publishedAt: data.publishedAt,
    slug,
    mdContent: contentHtml,
  };
}
