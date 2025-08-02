"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation"; // Ensure notFound is imported

const BlogPage = ({ params }) => {
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
      googleDriveLinks
    }
  `;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client.fetch(query, { slug })
      .then((fetchedBlog) => {
        if (!fetchedBlog) {
          setError("No blog data found.");
          setLoading(false);
          return;
        }
        setBlog(fetchedBlog);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog content:", err);
        setError("An error occurred while fetching blog data.");
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div className="text-center mt-16">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-16 text-red-500">{error}</div>;
  }

  // Extract headings from content for Table of Contents
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

  const imageUrl = blog.image ? urlFor(blog.image).url() : "/default-banner.jpg"; // Fallback image URL

  const { projectId, dataset } = client.config();

  function getFileUrl(file, extensionOverride = null) {
    if (!file?.asset?._ref) return null;
    const ref = file.asset._ref;
    const [, id, extension] = ref.split('-');
    const finalExtension = extensionOverride || extension;
    return `https://${projectId}.cdn.sanity.io/files/${dataset}/${id}.${finalExtension}?dl=${encodeURIComponent(file.title + '.' + finalExtension)}`;
  }

  return (
    <>
      <Head>
        <title>{blog.title} | HVAC DESIGNING</title>
        <meta name="description" content={blog.description || "Explore the latest HVAC blog insights."} />
      </Head>
      <main className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 lg:px-32 bg-light dark:bg-dark text-dark dark:text-light transition-all ease">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main content area */}
          <div className="w-full md:flex-3/4">
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
                <a href={blog.href} className="text-2xl bg-[#FF6F61] px-6 py-3 rounded-full shadow-lg hover:bg-[#E65C50] transition-all">
                  Visit Course
                </a>
              </div>
            </div>

            <div className="mt-8 text-black bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-200">
              <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

              {/* Content */}
              {blog.content ? (
                <PortableText
                  value={blog.content}
                  components={{
                    types: {
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

            </div>
          </div>

          {/* Categories and Certifications Section */}
          <div className="w-full md:w-1/4">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#FF6F61]">Categories</h3>
              <div className="space-y-2">
                <Link href="/blogs" className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]">
                  Blogs
                </Link>
                {/* Add Download option for Categories */}
                <div className="mb-6">
                  <a
                    href="/downloads/category"
                    className="bg-gradient-to-r from-[#FF6F61] to-[#E65C50] text-white px-8 py-4 rounded-lg shadow-xl hover:scale-105 hover:bg-[#E65C50] transition-all duration-300 transform"
                  >
                    Download Category Files
                  </a>
                </div>
              </div>

              <hr className="my-4 border-gray-300 dark:border-gray-600" />

              <h3 className="text-xl font-semibold mb-4 text-[#FF6F61]">Certifications</h3>
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
                {/* Add Download option for Certifications */}
                <div className="mb-6">
                  <a
                    href="/downloads/certifications"
                    className="bg-gradient-to-r from-[#FF6F61] to-[#E65C50] text-white px-8 py-4 rounded-lg shadow-xl hover:scale-105 hover:bg-[#E65C50] transition-all duration-300 transform"
                  >
                    Download Certification Files
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogPage;
