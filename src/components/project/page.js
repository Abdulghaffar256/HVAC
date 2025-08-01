"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client"; // Ensure proper import of Sanity client

const Project = () => {
  const [posts, setPosts] = useState([]);
  const [displayCount, setDisplayCount] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `
      *[_type in ["Project", "project"]] | order(publishedAt desc) {
        description,
        "slug": slug.current,
        image,
        title,
        tags,
        publishedAt,
        "author": author->name,
        documents,
        googleDriveLinks
      }
    `;
    client.fetch(query)
      .then((fetchedPosts) => {
        setPosts(fetchedPosts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-16">Loading...</div>;
  }

  const sidebarPosts = posts.slice(0, 4); // Display only the first 4 posts for the sidebar

  return (
    <>
      <Head>
        <title>HVAC Blogs | HVAC DESIGNING</title>
        <meta name="description" content="Explore the latest HVAC blogs and insights." />
      </Head>
      <main className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 lg:px-32 bg-light dark:bg-dark text-dark dark:text-light transition-all ease">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main content area */}
          <div className="w-full md:flex-1">
            {posts.slice(0, displayCount).map((post) => (
              <div key={post.slug} className="mb-12">
                {post.tags && post.tags.length > 0 && (
                  <span className="uppercase text-[#FF6F61] font-semibold text-sm mb-2 block">
                    {post.tags[0]}
                  </span>
                )}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <Link href={`/projects/${post.slug}`}>
                      <div className="relative w-full pt-[75%]">
                        <Image
                          src={urlFor(post.image).url()}
                          alt={post.title}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-2/3">
                    <Link href={`/projects/${post.slug}`}>
                      <h2 className="text-2xl font-bold hover:underline">
                        {post.title}
                      </h2>
                    </Link>
                    <span className="text-sm text-gray-500 mt-2 block">
                      by {post.author || "Abdul Ghaffar Khan"} |{" "}
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <p className="mt-2 text-gray-700">{post.description}</p>
                    <Link href={`/projects/${post.slug}`}>
                      <button className="mt-4 px-4 py-2 bg-[#FF6F61] text-white rounded hover:bg-[#E65C50]">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {posts.length > displayCount && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setDisplayCount(displayCount + 5)}
                  className="px-6 py-2 bg-transparent border border-[#0052CC] text-[#0052CC] font-medium uppercase tracking-wider rounded-none flex items-center gap-2 hover:bg-[#0052CC] hover:text-white transition-colors duration-200"
                >
                  Load More
                  <span>&gt;</span>
                </button>
              </div>
            )}
          </div>

          {/* Sidebar with Download Links */}
          <div className="w-full md:w-1/4 md:sticky top-0">
            <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#FF6F61]">
                Download Files Used in This Project
              </h3>
              {posts.map((post, index) => (
                <div key={index} className="mb-4">
                  {post.documents?.length > 0 && (
                    <a
                      href={`/projects/${post.slug}`}
                      className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
                    >
                      Download Documents: {post.title}
                    </a>
                  )}
                </div>
              ))}

              {/* Categories & Certifications */}
              <hr className="my-8 border-gray-300 dark:border-gray-600" />
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
                  <Link
                    href="/Revit"
                    className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]"
                  >
                    Revit
                  </Link>
                  <Link
                    href="/designing"
                    className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]"
                  >
                    Designing
                  </Link>
                  <Link
                    href="/control"
                    className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]"
                  >
                    Control
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
