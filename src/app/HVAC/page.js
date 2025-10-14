import React from "react";
import Hvac from "@/components/HVAC/page";
import Link from "next/link";

// ✅ Page-specific metadata (Next.js 13+)
export const metadata = {
  title: "HVAC Project",
  description:
    "Best online courses related to HVAC control. Learn HVAC Projects step-by-step for free.",
  openGraph: {
    title: "HVAC Project",
    description:
      "Explore HVAC Projects with detailed, step-by-step guidance — perfect for engineers and students.",
    url: "https://www.hvacdesigning.com/project",
    images: ["https://www.hvacdesigning.com/social-banner.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Project",
    description:
      "Learn HVAC Projects with free tutorials and online guidance.",
    images: ["https://www.hvacdesigning.com/social-banner.png"],
  },
};

export default function Eng() {
  return (
    <div className="mt-8">
      {/* Heading */}
      <div className="flex justify-center align-middle font-semibold text-2xl border border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh]">
        <h1>HVAC Designing Practical Project</h1>
      </div>

      {/* Project Section */}
      <div className="mt-6">
        <article style={{ minHeight: "300px", width: "100%" }}>
          <Link
            href="/project-details" // Adjust route as needed
            className="relative block group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition duration-300 border-2 border-transparent hover:border-blue-600 hover:ring-2 hover:ring-blue-500"
          >
            {/* Project Component */}
            <div className="relative z-10">
              <Hvac />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-white/10 transition-all duration-300 z-0" />
          </Link>
        </article>
      </div>
    </div>
  );
}
