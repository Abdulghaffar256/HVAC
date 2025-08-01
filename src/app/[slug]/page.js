import BlogDetails from "@/components/blogdetail/page";
import siteMetadata from "@/utils/siteMetaData";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import VisitCourseButton from "@/components/buttons/page";
import { PortableText } from "next-sanity";
import Sidebar from "@/components/sidebar/page";
import portableTextComponents from "@/components/yt/page";

// Utility to escape JSON-LD values
function escapeJsonLd(value) {
  if (!value) return "";
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  const query = `
    *[ _type in ["Project", "project"] && slug.current == $slug][0]{
      title,
      description,
      "slug": slug.current,
      image,
      publishedAt
    }
  `;

  try {
    const blog = await client.fetch(query, { slug });

    if (!blog) {
      return null; // Let Next.js handle notFound in the page component
    }

    const imageUrl = blog.image
      ? urlFor(blog.image).url()
      : siteMetadata.socialBanner || "https://www.hvacdesigning.com/default-banner.jpg";

    return {
      title: blog.title,
      description: blog.description,
      openGraph: {
        title: blog.title,
        description: blog.description,
        url: `${siteMetadata.siteUrl}/${slug}`,
        images: imageUrl ? [{ url: imageUrl, alt: blog.title }] : [],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.description,
        images: imageUrl ? [imageUrl] : [],
      },
      alternates: {
        canonical: `${siteMetadata.siteUrl}/${slug}`,
      },
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: escapeJsonLd(blog.title),
        description: escapeJsonLd(blog.description),
        image: imageUrl,
        datePublished: blog.publishedAt ? new Date(blog.publishedAt).toISOString() : undefined,
        url: `${siteMetadata.siteUrl}/${slug}`,
        author: { "@type": "Person", name: "Epic Solution Team" },
        publisher: {
          "@type": "Organization",
          name: "EPICS Solution",
          logo: { "@type": "ImageObject", url: siteMetadata.logo },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteMetadata.siteUrl}/${slug}`,
        },
      },
    };
  } catch (err) {
    console.error("Error generating metadata:", err);
    return null; // Fallback if there is an error
  }
}

export default async function BlogPage({ params }) {
  const { slug } = params;

  const query = `
    *[ _type in ["Project", "project"] && slug.current == $slug][0]{
      title,
      description,
      "slug": slug.current,
      image,
      publishedAt,
      href,
      content,
      faq,
      documents,
      rarFiles
    }
  `;

  try {
    const blog = await client.fetch(query, { slug });

    if (!blog) {
      notFound();
      return null;
    }

    // Dynamically extract headings from blog.content
    const headings = [];
    if (Array.isArray(blog.content)) {
      blog.content.forEach((block, index) => {
        if (block._type === "block" && block.style?.startsWith("h")) {
          headings.push({
            text: block.children?.map((child) => child.text).join(" ") || "",
            slug: `heading-${index}`,
            level: parseInt(block.style.replace("h", ""), 10),
          });
        }
      });
    }

    const imageUrl = blog.image ? urlFor(blog.image).url() : siteMetadata.socialBanner;

    const { projectId, dataset } = client.config();

    function getFileUrl(file, extensionOverride = null) {
      if (!file?.asset?._ref) return null;
      const ref = file.asset._ref;
      const [, id, extension] = ref.split('-');
      const finalExtension = extensionOverride || extension;
      return `https://${projectId}.cdn.sanity.io/files/${dataset}/${id}.${finalExtension}?dl=${encodeURIComponent(file.title + '.' + finalExtension)}`;
    }

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
            <VisitCourseButton href={blog.href} />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-8 px-5 md:px-10">
          {/* Sidebar - Table of Contents */}
          <div className="col-span-12 lg:col-span-4 hidden lg:block">
            <div className="border border-gray-300 rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-auto bg-gray-100">
              <Sidebar headings={headings} />
            </div>
          </div>

          {/* Blog Content */}
          <div className="col-span-12 lg:col-span-8 text-black bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-200">
            <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

            {/* Downloads Section at the top of the article */}
            {(blog.documents?.length > 0 || blog.rarFiles?.length > 0) && (
              <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4">Downloads</h2>
                {blog.documents?.map((doc, index) => {
                  const fileUrl = getFileUrl(doc);
                  if (!fileUrl) return null;
                  return (
                    <div key={`doc-${index}`} className="mb-4">
                      <a
                        href={fileUrl}
                        download
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                      >
                        Download Document: {doc.title}
                      </a>
                      {doc.description && <p className="mt-2 text-gray-600">{doc.description}</p>}
                    </div>
                  );
                })}
                {blog.rarFiles?.map((rar, index) => {
                  const fileUrl = getFileUrl(rar, 'rar');
                  if (!fileUrl) return null;
                  return (
                    <div key={`rar-${index}`} className="mb-4">
                      <button
                        onClick={() => window.open(fileUrl, '_blank')}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                      >
                        Download RAR File: {rar.title}
                      </button>
                      {rar.description && <p className="mt-2 text-gray-600">{rar.description}</p>}
                    </div>
                  );
                })}
              </section>
            )}

            {blog.content ? (
              <PortableText
                value={blog.content}
                components={{
                  ...portableTextComponents,
                  types: {
                    ...portableTextComponents.types,
                    image: ({ value }) => (
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
                    ),
                    youtubeEmbed: ({ value }) => {
                      if (!value?.videoUrl) return null;
                      const videoId = new URL(value.videoUrl).searchParams.get('v');
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
                    h1: ({ children }) => (
                      <h1 id={`heading-${children.join("")}`} className="text-4xl font-bold my-4">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 id={`heading-${children.join("")}`} className="text-3xl font-semibold my-4">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 id={`heading-${children.join("")}`} className="text-2xl font-medium my-3">
                        {children}
                      </h3>
                    ),
                    normal: ({ children }) => <p className="my-2">{children}</p>,
                  },
                }}
              />
            ) : (
              <p>No content available</p>
            )}
            {/* FAQ Section */}
            {blog.faq && blog.faq.length > 0 && (
              <section className="mt-8">
                <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
                {blog.faq.map((item, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-medium text-blue-600">{item.question}</h3>
                    <PortableText
                      value={item.answer}
                      components={{
                        block: {
                          normal: ({ children }) => <p className="mt-2">{children}</p>,
                        },
                        list: {
                          bullet: ({ children }) => <ul className="list-disc ml-5 mt-2">{children}</ul>,
                          number: ({ children }) => <ol className="list-decimal ml-5 mt-2">{children}</ol>,
                        },
                        listItem: {
                          bullet: ({ children }) => <li>{children}</li>,
                          number: ({ children }) => <li>{children}</li>,
                        },
                      }}
                    />
                  </div>
                ))}
              </section>
            )}
          </div>
        </div>
      </article>
    );
  } catch (err) {
    console.error("Error fetching blog content:", err);
    return <div className="text-center mt-16 text-red-500">Error loading blog data.</div>;
  }
}
