"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

export default function Sidebar() {
  const [universities, setUniversities] = useState([]);

  // Improved function to extract tutorial number from title
  const getTutorialNumber = (title) => {
    const match = title.match(/Tutorial[-\s]?(\d+)/i); // Matches "Tutorial-1" or "Tutorial 1"
    return match ? parseInt(match[1], 10) : Infinity; // Base 10 parsing
  };

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        *[_type ==  "dev"]{
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
        
        // Proper numerical sorting
        const sortedUniversities = result.sort((a, b) => {
          const numA = getTutorialNumber(a.title);
          const numB = getTutorialNumber(b.title);
          return numA - numB;
        });

        setUniversities(sortedUniversities);
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full md:w-60 bg-black text-white p-6 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
        Revit MEP Certification 
      </h2>
      <ul className="space-y-3">
        {universities.map((uni) => (
          <li key={uni.slug} className="hover:bg-gray-700 p-2 rounded-md">
            <Link href={`/revit/${uni.slug}`} className="block">
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
