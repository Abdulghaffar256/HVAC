"use client";
import React from "react";
import Head from "next/head";
import Artificial from "@/components/Artificial/page"; // Corrected path (removed "/page")

export default function Artif() {
  return (
    <>
      <Head>
        <title>Artificial Intelligence Courses</title>
        <meta property="og:title" content="Artificial Intelligence" />
        <meta
          property="og:description"
          content="Educational websites help students gain admission to top online courses and enroll in the best courses related to artificial intelligence."
        />
        <meta property="og:image" content="https://www.epicssolution.com/social-banner.png" />
        <meta property="og:url" content="https://www.epicssolution.com/artif" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Artificial Intelligence" />
        <meta
          name="twitter:description"
          content="Educational websites help students gain admission to top universities and enroll in the best courses related to artificial intelligence."
        />
        <meta name="twitter:image" content="https://www.epicssolution.com/social-banner.png" />
        {/* Add preload links here if needed, with correct attributes */}
      </Head>
      <div className="mt-8">
        <div className="flex justify-center items-center font-semibold text-2xl border-[1px] border-solid border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] bg-white dark:bg-gray-900">
          <h1>Artificial Intelligence Blogs & Courses</h1>
        </div>
        <div className="mt-6">
          <article style={{ minHeight: "300px", width: "100%" }}>
            <Artificial />
          </article>
        </div>
      </div>
    </>
  );
}
