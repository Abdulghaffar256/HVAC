// app/project/page.js

import Project from "@/components/project/page";
import Image from "next/image";

// ✅ Metadata API for Next.js App Router
export const metadata = {
  title: "HVAC / Project", // <-- UPDATED TITLE
  description:
    "Join the best online courses related to HVAC control. Learn about HVAC controls for free.",
  openGraph: {
    title: "HVAC / Project - Learn HVAC Controls Free",
    description:
      "Best online courses related to HVAC control. In this course, you will learn about HVAC controls for free.",
    url: "https://www.hvacdesigning.com/project",
    siteName: "HVAC Designing",
    images: [
      {
        url: "https://www.hvacdesigning.com/social-banner.png",
        width: 1200,
        height: 630,
        alt: "HVAC Project Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC / Project - Learn HVAC Controls Free",
    description:
      "Join the best online courses related to HVAC control. Learn about HVAC controls for free.",
    images: ["https://www.hvacdesigning.com/social-banner.png"],
  },
};

export default function Eng() {
  return (
    <div className="mt-8">
      {/* Header */}
      <div className="flex justify-center align-middle font-semibold text-2xl border border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh]">
        <h1>HVAC / Project</h1> {/* <-- UPDATED HEADING */}
      </div>

      {/* Project Component */}
      <div className="mt-6">
        <article style={{ minHeight: "300px", width: "100%" }}>
          <Project />
        </article>
      </div>
    </div>
  );
}
