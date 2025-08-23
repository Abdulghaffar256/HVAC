import React from "react";
import Engineering from "@/components/engineering/page";
import Head from "next/head";

export default function Eng() {
  return (
    <>
      {/* Meta Tags for SEO and Social Sharing */}
      <Head>
        <title>HVAC Control</title>
        <meta
          property="og:title"
          content="Best online courses related to HVAC control. In this course, you will learn about HVAC controls for free."
        />
        <meta
          property="og:description"
          content="Best online courses related to HVAC control. In this course, you will learn about HVAC controls for free."
        />
        <meta
          property="og:image"
          content="https://www.hvacdesigning.com/social-banner.png"
        />
        <meta
          property="og:url"
          content="https://www.hvacdesigning.com/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best online courses related to HVAC control. In this course, you will learn about HVAC controls for free."
        />
        <meta
          name="twitter:description"
          content="Best online courses related to HVAC control. In this course, you will learn about HVAC controls for free."
        />
        <meta
          name="twitter:image"
          content="https://www.hvacdesigning.com/social-banner.png"
        />
      </Head>

      <div className="mt-8">
        {/* Heading Section */}
        <div className="flex justify-center items-center font-semibold text-2xl border border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh]">
          <h1>HVAC Controls</h1>
        </div>

        {/* Engineering Component */}
        <div className="mt-6">
          <article style={{ minHeight: "300px", width: "100%" }}>
            <Engineering />
          </article>
        </div>
      </div>
    </>
  );
}
