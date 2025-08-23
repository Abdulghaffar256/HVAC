import React from "react";
import UniComponent1 from "@/components/courses/page";

export const metadata = {
  title: {
    absolute: "HVAC REVIT", // Ensures no "| HVAC Designing" suffix
  },
  description:
    "Master Revit MEP 2025 with our best online courses, tutorials, and blogs — designed to help you learn effectively and efficiently.",
  openGraph: {
    title: "HVAC REVIT",
    description:
      "Master Revit MEP 2025 with our best online courses, tutorials, and blogs — designed to help you learn effectively and efficiently.",
    url: "https://www.hvacdesigning.com/revit",
    siteName: "HVAC REVIT",
    images: [
      {
        url: "https://www.hvacdesigning.com/social-banner.png",
        width: 1200,
        height: 630,
        alt: "HVAC Revit Tutorials",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC REVIT",
    description:
      "Master Revit MEP 2025 with our best online courses, tutorials, and blogs — learn at your own pace for free.",
    images: ["https://www.hvacdesigning.com/social-banner.png"],
  },
};

export default function Mar() {
  return (
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
  );
}
