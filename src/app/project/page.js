import React from "react";
import Project from "@/components/project/page";
import Head from "next/head";

export default function Eng() {
  return (
    <>
      <Head>
        <title>HVAC Project</title>

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Best online courses related to HVAC control - Learn about HVAC controls free"
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
          content="https://www.hvacdesigning.com/project"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best online courses related to HVAC control - Learn HVAC controls free"
        />
        <meta
          name="twitter:description"
          content="Join the best online courses related to HVAC control. Learn about HVAC controls for free."
        />
        <meta
          name="twitter:image"
          content="https://www.hvacdesigning.com/social-banner.png"
        />
      </Head>

      <div className="mt-8">
        {/* Header */}
        <div className="flex justify-center align-middle font-semibold text-2xl border-[1px] border-solid border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh]">
          <h1>HVAC Designing Practical Project</h1>
        </div>

        {/* Project Component */}
        <div className="mt-6">
          <article style={{ minHeight: "300px", width: "100%" }}>
            <Project />
          </article>
        </div>
      </div>
    </>
  );
}
