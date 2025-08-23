import React from "react";
import UniComponent1 from "@/components/courses/page";
import Head from "next/head";

export default function Mar() {
  return (
    <>
      {/* Head Meta Tags for SEO and Social Sharing */}
      <Head>
        <title>HVAC REVIT</title>
        <meta
          name="description"
          content="Master Revit MEP 2025 with our best online courses, tutorials, and blogs — designed to help you learn effectively and efficiently."
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="HVAC REVIT" />
        <meta
          property="og:description"
          content="Master Revit MEP 2025 with our best online courses, tutorials, and blogs — designed to help you learn effectively and efficiently."
        />
        <meta
          property="og:image"
          content="https://www.hvacdesigning.com/social-banner.png"
        />
        <meta
          property="og:url"
          content="https://www.hvacdesigning.com/revit"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HVAC REVIT" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HVAC REVIT" />
        <meta
          name="twitter:description"
          content="Master Revit MEP 2025 with our best online courses, tutorials, and blogs — learn at your own pace for free."
        />
        <meta
          name="twitter:image"
          content="https://www.hvacdesigning.com/social-banner.png"
        />
      </Head>

      {/* Page Content */}
      <div className="mt-8">
        {/* Heading Section */}
        <div className="flex justify-center items-center font-semibold text-2xl border-[1px] border-solid border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh]">
          <h1>Revit Tutorials</h1>
        </div>

        {/* Content Section */}
        <div className="mt-6">
          <article style={{ minHeight: "300px", width: "100%" }}>
            <UniComponent1 />
          </article>
        </div>
      </div>
    </>
  );
}
