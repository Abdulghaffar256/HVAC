// src/app/projects/[slug]/page.js
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import portableTextComponents from "@/components/yt/page";
import Link from "next/link";

export const revalidate = 60;

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

function getGoogleDriveDirectDownloadUrl(link) {
  if (!link) return null;
  const match = link.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=download&id=${match[1]}`;
  }
  return link; // fallback to original if not matching
}

export default async function BlogPage({ params }) {
  const { slug } = params;
  const query = `*[_type in ["Project", "project"] && slug.current == $slug][0]{
    title,
    description,
    "slug": slug.current,
    image,
    publishedAt,
    href,
    content,
    faq,
    documents,
    googleDriveLinks
  }`;
  let blog;
  try {
    blog = await client.fetch(query, { slug });
  } catch (error) {
    console.error("Error fetching blog:", error);
    notFound();
  }
  if (!blog) {
    notFound();
  }
  // Extract headings
  const headings = [];
  if (Array.isArray(blog.content)) {
    blog.content.forEach((block, index) => {
      if (block._type === "block" && block.style?.startsWith("h")) {
        const text = block.children?.map((child) => child.text).join(" ") || "";
        headings.push({
          text,
          slug: slugify(text),
          level: parseInt(block.style.replace("h", ""), 10),
        });
      }
    });
  }
  const imageUrl = blog.image ? urlFor(blog.image).url() : null;
  const { projectId, dataset } = client.config();

  function getFileUrl(file, extensionOverride = null) {
    if (!file?.asset?._ref) return null;
    const ref = file.asset._ref;
    const parts = ref.split("-");
    const type = parts[0];
    if (type !== "file" && type !== "image") return null;
    const ext = extensionOverride || parts[parts.length - 1];
    const id = parts.slice(1, -1).join("-");
    const assetType = type === "image" ? "images" : "files";
    const baseUrl = `https://cdn.sanity.io/${assetType}/${projectId}/${dataset}/${id}.${ext}`;
    const dlParam = file.title ? `?dl=${encodeURIComponent(file.title + "." + ext)}` : "";
    return baseUrl + dlParam;
  }

  const primaryDriveLink = blog.googleDriveLinks?.[0]?.link ? getGoogleDriveDirectDownloadUrl(blog.googleDriveLinks[0].link) : null;
  const primaryDriveTitle = blog.googleDriveLinks?.[0]?.title || "Download from Google Drive";

  return (
    <article>
      <div className="relative w-full h-[70vh] bg-gray-800">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={blog.title || "Blog featured image"}
            fill
            className="object-cover opacity-75"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gray-800/60" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
          {primaryDriveLink && (
            <a
              href={primaryDriveLink}
              download
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
            >
              {primaryDriveTitle}
            </a>
          )}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8 mt-8 px-5 md:px-10">
        {/* Main Content */}
        <div className="col-span-12 lg:col-span-8 text-black bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-200">
          <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
          {blog.googleDriveLinks?.length > 0 && (
            <section className="mb-8">
              <h2 className="text-3xl font-semibold mb-4 text-[#FF6F61]">
                Downloads
              </h2>
              {blog.googleDriveLinks?.map((file, index) => (
                <div key={`file-${index}`} className="mb-4">
                  <a
                    href={getGoogleDriveDirectDownloadUrl(file.link)}
                    download
                    className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
                  >
                    Download File: {file.title}
                  </a>
                  {file.description && (
                    <p className="mt-2 text-gray-600">{file.description}</p>
                  )}
                </div>
              ))}
            </section>
          )}
          {blog.content ? (
            <PortableText
              value={blog.content}
              components={{
                ...portableTextComponents,
                types: {
                  ...portableTextComponents.types,
                  image: ({ value }) => {
                    if (!value?.asset) return null;
                    return (
                      <div className="my-4">
                        <Image
                          src={urlFor(value).url()}
                          alt={value.alt || blog.title}
                          width={800}
                          height={400}
                          className="w-full h-auto rounded"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    );
                  },
                  youtubeEmbed: ({ value }) => {
                    if (!value?.videoUrl || typeof value.videoUrl !== "string") return null;
                    let videoId;
                    try {
                      const url = new URL(value.videoUrl);
                      videoId = url.searchParams.get("v");
                    } catch {
                      return null;
                    }
                    if (!videoId) return null;
                    return (
                      <div className="my-4">
                        <iframe
                          width={value.videoWidth || 800}
                          height={value.videoHeight || 450}
                          src={`https://www.youtube.com/embed/${videoId}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full rounded-lg shadow-md"
                        />
                      </div>
                    );
                  },
                },
                marks: {
                  link: ({ value, children }) => (
                    <a
                      href={value?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      {children}
                    </a>
                  ),
                },
                block: {
                  h1: ({ children, value }) => {
                    const text = value.children?.map((child) => child.text).join(" ") || "";
                    const id = slugify(text);
                    return (
                      <h1 id={id} className="text-4xl font-bold my-4">
                        {children}
                      </h1>
                    );
                  },
                  h2: ({ children, value }) => {
                    const text = value.children?.map((child) => child.text).join(" ") || "";
                    const id = slugify(text);
                    return (
                      <h2 id={id} className="text-3xl font-semibold my-4">
                        {children}
                      </h2>
                    );
                  },
                  h3: ({ children, value }) => {
                    const text = value.children?.map((child) => child.text).join(" ") || "";
                    const id = slugify(text);
                    return (
                      <h3 id={id} className="text-2xl font-medium my-3">
                        {children}
                      </h3>
                    );
                  },
                  normal: ({ children }) => <p className="my-2">{children}</p>,
                },
              }}
            />
          ) : (
            <p>No content available</p>
          )}
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-4 text-[#FF6F61]">Categories</h2>
            <div className="space-y-2">
              <Link
                href="/blogs"
                className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]"
              >
                Blogs
              </Link>
            </div>
          </div>
          <hr className="my-8 border-gray-300 dark:border-gray-600" />
          <div>
            <h2 className="text-lg font-bold mb-4 text-[#FF6F61]">Certifications</h2>
            <div className="space-y-2">
              <Link href="/Revit" className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]">
                Revit
              </Link>
              <Link href="/designing" className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]">
                Designing
              </Link>
              <Link href="/control" className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]">
                Control
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
