import Project from "@/components/project/page";
import Script from "next/script";

// ✅ Use Next.js Metadata API for SEO (App Router compatible)
export const metadata = {
  title: "HVAC Project | HVAC Designing",
  description:
    "Explore the best online courses related to HVAC control. Learn practical HVAC designing, control systems, and hands-on projects for free.",
  keywords: [
    "HVAC",
    "HVAC project",
    "HVAC controls",
    "HVAC design",
    "HVAC designing",
    "energy efficient HVAC",
    "HVAC practical project",
    "HVAC online courses",
  ],
  authors: [{ name: "HVAC Designing" }],
  alternates: {
    canonical: "https://www.hvacdesigning.com/project",
  },
  openGraph: {
    title: "HVAC Project - Learn HVAC Controls Free",
    description:
      "Best online courses related to HVAC control. Learn HVAC designing and controls with practical hands-on projects for free.",
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
    title: "HVAC Project - Learn HVAC Controls Free",
    description:
      "Join the best online courses related to HVAC control. Learn about HVAC controls and energy-efficient system designing for free.",
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
      {/* Inject JSON-LD Schema for better indexing */}
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "HVAC Project",
          url: "https://www.hvacdesigning.com/project",
          description:
            "Explore the best online courses related to HVAC control. Learn practical HVAC designing, control systems, and hands-on projects for free.",
          publisher: {
            "@type": "Organization",
            name: "HVAC Designing",
            url: "https://www.hvacdesigning.com",
            logo: {
              "@type": "ImageObject",
              url: "https://www.hvacdesigning.com/logo.png",
            },
          },
        })}
      </Script>

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
