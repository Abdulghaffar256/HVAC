import React from "react";
import UniComponent1 from "@/components/courses/page";

export const metadata = {
  title: "HVAC REVIT",
  description: "Master Revit MEP 2025 with tutorials, blogs, and hands-on learning.",
  openGraph: {
    title: "HVAC REVIT",
    description: "Master Revit MEP 2025 with tutorials, blogs, and hands-on learning.",
    url: "https://www.hvacdesigning.com/revit",
    images: ["https://www.hvacdesigning.com/social-banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC REVIT",
    images: ["https://www.hvacdesigning.com/social-banner.png"],
  },
};

export default function Mar() {
  return (
    <div className="mt-8">
      {/* Heading Section */}
      <div className="flex justify-center items-center font-semibold text-2xl border border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh]">
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
