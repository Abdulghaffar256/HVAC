"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const AiClient = ({ posts }) => {
  const [displayCount, setDisplayCount] = useState(5);

  const sidebarPosts = posts.slice(6, 10);

  return (
    <main className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 lg:px-32 text-black bg-light dark:bg-dark text-dark dark:text-light transition-all ease">
      <div className="flex flex-col md:flex-row gap-8">
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
                  <Link href={`/${post.slug}`}>
                    <div className="relative w-full pt-[75%]">
                      <Image
                        src={urlFor(post.image).url()}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </Link>
                </div>
                <div className="md:w-2/3">
                  <Link href={`/${post.slug}`}>
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
                  <Link href={`/${post.slug}`}>
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
                onClick={() => setDisplayCount(displayCount + 6)}
                className="px-6 py-2 bg-[#FF6F61] text-white rounded hover:bg-[#E65C50]"
              >
                Load More
              </button>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/4 md:sticky md:top-0">
          <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">
            <h3 className="text-xl font-semibold mb-4 text-[#FF6F61]">Latest Blogs</h3>
            {sidebarPosts.map((post) => (
              <div key={post.slug} className="flex items-center mb-4 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
                <div className="relative w-20 h-[60px]">
                  <Image
                    src={urlFor(post.image).url()}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded shadow-sm"
                  />
                </div>
                <div className="ml-4">
                  <Link href={`/${post.slug}`}>
                    <h4 className="text-sm font-medium hover:underline text-gray-900 dark:text-gray-100">
                      {post.title.length > 20 ? `${post.title.slice(0, 20)}...` : post.title}
                    </h4>
                  </Link>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            ))}
            <div className="mt-8">
              <h2 className="text-lg font-bold mb-4 text-[#FF6F61]">CATEGORIES</h2>
              <div className="space-y-2">
                <Link href="/dev" className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]">Development</Link>
                <Link href="/equipment" className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]">Equipment</Link>
                <Link href="/ai" className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]">Artificial Intelligence</Link>
                <Link href="/eng" className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]">Designing</Link>
                <Link href="/energy" className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]">Energy</Link>
                <Link href="/waste" className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]">Waste</Link>
              </div>
            </div>
            <hr className="my-8 border-gray-300 dark:border-gray-600" />
            <div>
              <h2 className="text-lg font-bold mb-4 text-[#FF6F61]">CERTIFICATIONS</h2>
              <div className="space-y-2">
                <Link href="/mep" className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]">Revit MEP</Link>
                <Link href="/Leed" className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]">LEED</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AiClient;
