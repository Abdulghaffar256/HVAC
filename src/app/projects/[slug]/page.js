"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const query = groq`*[_type == "blog" && slug.current == $slug][0]{
  title,
  publishedAt,
  author->{name},
  mainImage,
  body,
  categories[]->{
    title
  }
}`;

export default function BlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await client.fetch(query, { slug });
      setBlog(data);
    }
    if (slug) fetchData();
  }, [slug]);

  if (!blog) return <div className="text-center mt-20">Loading...</div>;

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-[#FF6F61]">{blog.title}</h1>
      <p className="text-gray-500 mb-2">
        Published on {new Date(blog.publishedAt).toLocaleDateString()} by{" "}
        <span className="font-semibold">{blog.author?.name}</span>
      </p>

      {blog.categories?.length > 0 && (
        <div className="mb-4">
          <span className="font-semibold">Categories:</span>{" "}
          {blog.categories.map((cat) => cat.title).join(", ")}
        </div>
      )}

      {blog.mainImage && (
        <div className="relative w-full h-96 mb-8">
          <Image
            src={blog.mainImage.asset.url}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      )}

      <article className="prose max-w-none">
        <PortableText value={blog.body} />
      </article>
    </main>
  );
}

