"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

export default function Sidebar1() {
  const [universities, setUniversities] = useState([]);

  const getTutorialNumber = (title) => {
    const match = title.match(/Tutorial[-\s]?(\d+)/i);
    return match ? parseInt(match[1], 10) : Infinity;
  };

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        *[_type in ["AI", "Eng", "equipment", "development", "dev"]]{
          title,
          "slug": slug.current,
          description,
          image,
          href,
          tags,
          content,
          heading1,
          heading2,
          heading4,
          publishedAt
        }
      `;
      try {
        const result = await client.fetch(query);
        const sorted = result.sort((a, b) => getTutorialNumber(a.title) - getTutorialNumber(b.title));
        setUniversities(sorted);
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full md:w-60 bg-black text-white p-6">
      <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
        LEED Certification 
      </h2>
      <ul className="space-y-3">
        {universities.map((uni) => (
          <li key={uni.slug} className="hover:bg-gray-700 p-2 rounded-md">
            <Link href={`/Leed/${uni.slug}`} className="block">
              <span className="cursor-pointer hover:text-gray-300 transition duration-200">
                {uni.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

