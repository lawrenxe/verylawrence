import Link from "next/link";

export default function Post({ post }: any) {
  const { mdContent, slug, publishedAt, title } = post;

  const dateString = new Date(publishedAt).toLocaleDateString("zh-CN", {
    dateStyle: "full",
  });
  const timeString = new Date(publishedAt).toLocaleTimeString("zh-CN", {
    timeStyle: "short",
  });

  return (
    <div className="prose bg-white max-w-4xl overflow-x-hidden p-4 border-[1px] border-black rounded-xl">
      <h2>
        <Link href={`/post/${slug}`} className="font-[700] no-underline">
          {title ?? "梦话"}
        </Link>
      </h2>

      <div dangerouslySetInnerHTML={{ __html: mdContent }} />

      <time dateTime={publishedAt}>
        <Link href={`/post/${slug}`}>
          {dateString} {timeString}
        </Link>
      </time>
    </div>
  );
}
