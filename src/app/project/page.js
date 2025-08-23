import Project from "@/components/project/page";

// ✅ Enhanced Metadata for SEO
export const metadata = {
  title: "HVAC Designing Practical Project | HVAC Project",
  description:
    "Join the best online courses related to HVAC control. Learn HVAC designing, energy-efficient systems, and practical controls for free.",
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
    title: "HVAC Designing Practical Project",
    description:
      "Learn HVAC controls, design, and practical applications with our hands-on projects. Free resources for students and professionals.",
    url: "https://www.hvacdesigning.com/project",
    siteName: "HVAC Designing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.hvacdesigning.com/social-banner.png",
        width: 1200,
        height: 630,
        alt: "HVAC Project Banner - Learn HVAC Controls Free",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Designing Practical Project",
    description:
      "Hands-on HVAC control and design projects. Learn practical skills with free online resources.",
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
