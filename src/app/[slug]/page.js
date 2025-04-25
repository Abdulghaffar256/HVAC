import Head from "next/head";
import BlogDetails from "@/components/blogdetail/page";
import siteMetadata from "@/utils/siteMetaData";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import VisitCourseButton from "@/components/buttons/page";
import { PortableText } from "next-sanity";

// Utility to escape JSON-LD values
function escapeJsonLd(value) {
  if (!value) return "";
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

// Define typeKeywords mapping for default keywords based on blog type
const typeKeywords = {
  AI: "Generative AI, AI in the Oil and Gas, AI, artificial intelligence, machine learning",
  Eng: "engineering, valves, centrifugal chiller, variable refrigerant flow, septic tank, technology, innovation",
  equipment: "equipment, tools, machinery",
  development: "software development, coding, programming",
  dev: "dev, development, tech",
  energy: "energy, sustainability, green tech, solar energy, green building",
  waste: "waste management, recycling, environment",
};

export async function generateMetadata({ params }) {
  const { slug } = params;

  // GROQ query to fetch blog data including _type and tags
  const query = `
    *[_type in ["AI", "Eng", "equipment", "development", "dev", "energy", "waste"] && slug.current == $slug][0]{
      _type,
      title,
      description,
      "slug": slug.current,
      image,
      publishedAt,
      tags,
      faq[] {
        question,
        answer
      }
    }
  `;

  const blog = await client.fetch(query, { slug });

  if (!blog) {
    notFound();
    return null;
  }

  const imageUrl = blog.image ? urlFor(blog.image).url() : "https://www.epicssolution.com/default-banner.jpg";

  // FAQ Structured Data
  const faqSchema = blog.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: blog.faq.map((item) => ({
          "@type": "Question",
          name: escapeJsonLd(item.question),
          acceptedAnswer: {
            "@type": "Answer",
            text: escapeJsonLd(
              item.answer.map((block) => block.children.map((child) => child.text).join(" ")).join(" ")
            ),
          },
        })),
      }
    : null;

  // BreadcrumbList Structured Data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.epicssolution.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.epicssolution.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: `https://www.epicssolution.com/${slug}`,
      },
    ],
  };

  // Organization Structured Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EPICS Solution",
    url: "https://www.epicssolution.com/",
    logo: siteMetadata.logo,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteMetadata.phoneNumber || "+1-123-456-7890",
      contactType: "Customer Service",
      areaServed: "Global",
      availableLanguage: "English",
    },
    sameAs: [
      siteMetadata.twitter,
      siteMetadata.linkedin,
      siteMetadata.github,
    ].filter(Boolean),
  };

  // Generate dynamic keywords based on tags or type
  const defaultKeywords = typeKeywords[blog._type] || "technology, innovation";
  const keywords = blog.tags && blog.tags.length > 0 ? blog.tags.join(", ") : defaultKeywords;

  return {
    title: blog.title,
    description: blog.description,
    keywords: keywords,
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
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: blog.title,
        description: blog.description,
        image: imageUrl,
        datePublished: blog.publishedAt,
        dateModified: blog.publishedAt,
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
      breadcrumbSchema,
      organizationSchema,
      ...(faqSchema ? [faqSchema] : []),
    ],
  };
}

export default async function BlogPage({ params }) {
  const { slug } = params;

  // GROQ query to fetch blog data including _type, tags, and image metadata
  const query = `
    *[_type in ["AI", "Eng", "equipment", "development", "dev", "energy", "waste"] && slug.current == $slug][0]{
      _type,
      title,
      description,
      "slug": slug.current,
      image,
      publishedAt,
      href,
      content[] {
        ...,
        _type == "image" => {
          ...,
          asset-> {
            _id,
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          }
        }
      },
      tags,
      faq[] {
        question,
        answer
      }
    }
  `;

  const blog = await client.fetch(query, { slug });

  if (!blog) {
    notFound();
    return null;
  }

  // Fetch all blog topics for the sidebar
  const allBlogsQuery = `
    *[_type in ["AI", "Eng", "equipment", "development", "dev", "energy", "waste"]] | order(publishedAt desc) {
      title,
      "slug": slug.current
    }
  `;
  const allBlogs = await client.fetch(allBlogsQuery);

  const imageUrl = blog.image ? urlFor(blog.image).url() : siteMetadata.socialBanner;

  // FAQ Structured Data for the page
  const faqSchema = blog.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: blog.faq.map((item) => ({
          "@type": "Question",
          name: escapeJsonLd(item.question),
          acceptedAnswer: {
            "@type": "Answer",
            text: escapeJsonLd(
              item.answer.map((block) => block.children.map((child) => child.text).join(" ")).join(" ")
            ),
          },
        })),
      }
    : null;

  // BreadcrumbList Structured Data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.epicssolution.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.epicssolution.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: `https://www.epicssolution.com/${slug}`,
      },
    ],
  };

  // Organization Structured Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EPICS Solution",
    url: "https://www.epicssolution.com/",
    logo: siteMetadata.logo,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteMetadata.phoneNumber || "+1-123-456-7890",
      contactType: "Customer Service",
      areaServed: "Global",
      availableLanguage: "English",
    },
    sameAs: [
      siteMetadata.twitter,
      siteMetadata.linkedin,
      siteMetadata.github,
    ].filter(Boolean),
  };

  // Calculate dynamic keywords
  const defaultKeywords = typeKeywords[blog._type] || "technology, innovation";
  const keywords = blog.tags && blog.tags.length > 0 ? blog.tags.join(", ") : defaultKeywords;

  return (
    <article>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`https://www.epicssolution.com/${slug}`} />
        <meta name="author" content="Epic Solution Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:url" content={`https://www.epicssolution.com/${slug}`} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Epic Solution Blog" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={new Date().toISOString()} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Article",
                headline: blog.title,
                description: blog.description,
                image: imageUrl,
                datePublished: blog.publishedAt,
                dateModified: blog.publishedAt,
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
              breadcrumbSchema,
              organizationSchema,
              ...(faqSchema ? [faqSchema] : []),
            ]),
          }}
        />
      </Head>

      {/* Hero Image Section */}
      <div className="relative w-full h-[70vh] bg-gray-800">
        {blog.image && (
          <div title={blog.title}>
            <Image
              src={imageUrl}
              alt={`${blog.title} - ${blog.description.slice(0, 50)}`}
              fill
              className="aspect-square w-full h-full object-cover object-center"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, 50vw"
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-12 gap-8 mt-8 px-5 md:px-10">
        {/* Sidebar with All Blog Topics */}
        <div className="col-span-12 lg:col-span-4 hidden lg:block">
          <div className="border border-dark text-black rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-auto text-black bg-light dark:bg-dark text-dark dark:text-light transition-all ease">
            <h2 className="text-lg font-semibold capitalize">Read More</h2>
            <ul className="mt-4">
              {allBlogs.map((blog) => (
                <li key={blog.slug} className="py-1">
                  <a
                    href={`/${blog.slug}`}
                    className="text-blue-500 hover:underline focus:outline focus:outline-2 focus:outline-blue-600"
                  >
                    {blog.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Blog Content */}
        <div className="col-span-12 lg:col-span-8 text-black bg-light dark:bg-dark text-dark dark:text-light transition-all ease">
          {blog.content ? (
            <PortableText
              value={blog.content}
              components={{
                types: {
                  image: ({ value }) => {
                    if (value.asset && value.asset.metadata && value.asset.metadata.dimensions) {
                      const { width, height } = value.asset.metadata.dimensions;
                      return (
                        <div className="my-4">
                          <Image
                            src={urlFor(value).url()}
                            alt={value.alt || `Image for ${blog.title}`}
                            width={width}
                            height={height}
                            className="w-full h-auto rounded"
                          />
                        </div>
                      );
                    } else {
                      return (
                        <div className="my-4">
                          <Image
                            src={urlFor(value).url()}
                            alt={value.alt || `Image for ${blog.title}`}
                            width={800}
                            height={600}
                            className="w-full h-auto rounded"
                          />
                        </div>
                      );
                    }
                  },
                },
                marks: {
                  link: ({ value, children }) => (
                    <a
                      href={value.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline focus:outline focus:outline-2 focus:outline-blue-600"
                    >
                      {children}
                    </a>
                  ),
                },
                block: {
                  h1: ({ children, value }) => (
                    <h1 id={value._key} className="text-4xl font-bold my-4">{children}</h1>
                  ),
                  h2: ({ children, value }) => (
                    <h2 id={value._key} className="text-3xl font-semibold my-4">{children}</h2>
                  ),
                  h3: ({ children, value }) => (
                    <h3 id={value._key} className="text-2xl font-medium my-3">{children}</h3>
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
}
