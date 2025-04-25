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
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  const query = `
    *[_type in ["AI", "Eng", "equipment", "development", "dev"] && slug.current == $slug][0]{
      title,
      description,
      "slug": slug.current,
      image,
      publishedAt
    }
  `;

  const blog = await client.fetch(query, { slug });

  if (!blog) {
    notFound();
    return null;
  }

  const imageUrl = blog.image
    ? urlFor(blog.image).url()
    : "https://www.epicssolution.com/default-banner.jpg";

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://www.epicssolution.com/${slug}`,
      images: imageUrl ? [{ url: imageUrl }] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: imageUrl ? [imageUrl] : [],
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: blog.title,
      description: blog.description,
      image: imageUrl,
      datePublished: blog.publishedAt,
      url: `https://www.epicssolution.com/${slug}`,
      author: { "@type": "Person", name: "Epic Solution Team" },
      publisher: {
        "@type": "Organization",
        name: "EPICS Solution",
        logo: { "@type": "ImageObject", url: siteMetadata.logo },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.epicssolution.com/${slug}`,
      },
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = params;

  const query = `
    *[_type in [ "dev"] && slug.current == $slug][0]{
      title,
      description,
      "slug": slug.current,
      image,
      publishedAt,
      href,
      content
    }
  `;

  const blog = await client.fetch(query, { slug });

  if (!blog) {
    notFound();
    return null;
  }

  // Dynamically extract headings from blog.content
  const headings = [];
  if (Array.isArray(blog.content)) {
    blog.content.forEach((block, index) => {
      if (block.style && block.style.startsWith("h")) {
        headings.push({
          text: block.children.map((child) => child.text).join(" "),
          slug: `heading-${index}`,
          level: parseInt(block.style.replace("h", ""), 10),
        });
      }
    });
  }

  const imageUrl = blog.image ? urlFor(blog.image).url() : siteMetadata.socialBanner;

  return (
    <article>
      <div className="relative w-full h-[70vh] bg-gray-800">
        {/* Header Image */}
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="opacity-75"
          />
        )}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-800/60" />
                <div className="z-10 flex flex-col items-center justify-center absolute inset-0 text-white">
                  <VisitCourseButton href={blog.href} />
                </div>
      </div>

      <div className="grid grid-cols-12 gap-8 mt-8 px-5 md:px-10">
        {/* Sidebar - Table of Contents */}
        <div className="col-span-12 lg:col-span-4 hidden lg:block">
          <div className="border border-gray-300 rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-auto bg-gray-100">
            <Sidebar />
          </div>
        </div>

        {/* Blog Content */}
<div className="col-span-12 lg:col-span-8 text-black bg-light dark:bg-dark text-dark dark:text-light transition-all ease">
  <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
  {blog.content ? (
    <PortableText
      value={blog.content}
      components={{
        ...portableTextComponents, // Add custom YouTube embed components
        types: {
          ...portableTextComponents.types, // Ensure YouTube stays intact
          image: ({ value }) => (
            <div className="my-4">
              <Image
                src={urlFor(value).url()}
                alt={value.alt || "Blog image"}
                width={800}
                height={400}
                className="w-full h-auto rounded"
              />
            </div>
          ),
          // Custom YouTube Embed Handling
          youtubeEmbed: ({ value }) => (
            <div className="my-4">
              <iframe
                width={value.videoWidth || 800} // Default width if not specified
                height={value.videoHeight || 500} // Default height if not specified
                src={`https://www.youtube.com/embed/${new URL(value.videoUrl).searchParams.get('v')}`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="w-full rounded-lg shadow-md"
              ></iframe>
            </div>
          ),
        },
        marks: {
          link: ({ value, children }) => (
            <a
              href={value.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {children}
            </a>
          ),
        },
        block: {
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold my-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold my-4">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-medium my-3">{children}</h3>
          ),
          normal: ({ children }) => <p className="my-2">{children}</p>,
        },
      }}
    />
  ) : (
    <p>No content available</p>
  )}
</div>

      </div>
    </article>
  );
}
