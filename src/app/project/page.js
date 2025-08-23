// app/project/page.js

import Project from "@/components/project/page";

export const metadata = {
  title: "HVAC Project | HVAC Designing",
  description:
    "Explore HVAC projects and learn HVAC control systems with hands-on tutorials. Join free courses to master energy-efficient HVAC design.",
  keywords: [
    "HVAC",
    "HVAC project",
    "HVAC controls",
    "HVAC design",
    "energy efficient HVAC",
    "HVAC practical project",
    "HVAC online courses",
  ],
  authors: [{ name: "HVAC Designing" }],
  alternates: {
    canonical: "https://www.hvacdesigning.com/project",
  },
  openGraph: {
    title: "HVAC Project | HVAC Designing",
    description:
      "Learn practical HVAC system design and controls with this free project-based course.",
    url: "https://www.hvacdesigning.com/project",
    siteName: "HVAC Designing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.hvacdesigning.com/social-banner.png",
        width: 1200,
        height: 630,
        alt: "HVAC Project Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Project | HVAC Designing",
    description:
      "Hands-on HVAC design and controls tutorials. Learn for free with project-based content.",
    images: ["https://www.hvacdesigning.com/social-banner.png"],
    creator: "@hvacdesigning",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
};

export default function Eng() {
  return (
    <div className="mt-8">
      {/* Header */}
      <div className="flex justify-center align-middle font-semibold text-2xl border border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh]">
        <h1>HVAC Designing Practical Project</h1>
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
