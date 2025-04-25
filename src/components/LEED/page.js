"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Sidebar1 from "../sidebar1/page";
import Head from "next/head";

const Control = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type=="leed"]{
        description,
        "slug": slug.current,
        image,
        title,
        href,
        tags,
        content,
        publishedAt
      }`;
      const result = await client.fetch(query);
      // Sort tutorials by published date or any other field you want
      result.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)); // Optional: sort by date
      setUniversities(result);
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-col md:flex-row mt-16 sm:mt-24 md:mt-32">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-100 dark:bg-gray-800 p-5 md:p-8 shadow-lg h-auto md:h-screen sticky top-0">
        <h2 className="text-2xl font-bold text-dark dark:text-light mb-4">
          Explore More
        </h2>
        <Sidebar1 universities={universities} />
      </aside>

      {/* Main Content */}
      <div className="w-full md:w-3/4 px-5 sm:px-10 md:px-16 lg:px-20 flex flex-col items-center">
        {/* Dynamic Head Meta Tags */}
        <Head>
          <title>Best Online Courses | LEED Certification</title>
          <meta
            name="description"
            content="These Revit MEP tutorials are very student-friendly, simple, and easy to follow."
          />
        </Head>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8">
          {universities.map((uni, index) => (
            <div
              key={uni.slug}
              className="group flex flex-col items-center text-dark dark:text-light mb-4 p-4 border rounded-lg shadow-lg bg-white dark:bg-gray-900"
            >
              {/* Image Section */}
              <Link
                href={`/Leed/${uni.slug}`}
                className="h-full rounded-xl overflow-hidden"
              >
                {uni.image && (
                  <Image
                    src={urlFor(uni.image).url()}
                    alt={uni.image.alt || uni.title}
                    width={400}
                    height={300}
                    className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease-in-out duration-300"
                    loading="lazy"
                  />
                )}
              </Link>

              {/* Content Section */}
              <div className="flex flex-col w-full mt-4 relative dark:bg-dark text-dark dark:text-light transition-all eas">
                {uni.tags && (
                  <span className="uppercase text-accent dark:text-yellow-400 font-semibold text-sm">
                    {uni.tags[0]}
                  </span>
                )}

                {/* Topic Title */}
                <h3 className="text-lg font-semibold text-dark dark:text-light mt-2 relative dark:bg-dark text-dark dark:text-light transition-all eas">
                  chapter- {index + 1}: {uni.title}
                </h3>

                {/* Button */}
                <Link href={`/Leed/${uni.slug}`}>
                  <button className="mt-3 w-full py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-dark font-semibold rounded-lg transition-all duration-300">
                    Read More
                  </button>
                </Link>

                {/* Published Date */}
                <span className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                  {uni.publishedAt
                    ? new Date(uni.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "Date not available"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Control;
