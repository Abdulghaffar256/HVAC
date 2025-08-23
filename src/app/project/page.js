import Project from "@/components/project/page";
import Image from "next/image";

// ✅ Page Metadata using Next.js 13 Metadata API
export const metadata = {
  title: "HVAC Project",
  description:
    "Join the best online courses related to HVAC control. Learn about HVAC controls for free.",
  openGraph: {
    title: "HVAC Project - Learn HVAC Controls Free",
    description:
      "Best online courses related to HVAC control. In this course, you will learn about HVAC controls for free.",
    url: "https://www.hvacdesigning.com/project",
    siteName: "HVAC Project",
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
    title: "HVAC Project - Learn HVAC Controls Free",
    description:
      "Join the best online courses related to HVAC control. Learn about HVAC controls for free.",
    images: ["https://www.hvacdesigning.com/social-banner.png"],
  },
};

export default function Eng() {
  return (
    <div className="mt-8">
      {/* Header Section */}
      <div className="flex justify-center items-center font-semibold text-2xl border border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh]">
        <h1>HVAC Designing Practical Project</h1>
      </div>

      {/* Content Section */}
      <div className="mt-6">
        <article className="w-full" style={{ minHeight: "300px" }}>
          <Project />
        </article>
      </div>
    </div>
  );
}
