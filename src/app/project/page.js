import Project from "@/components/project/page";

export const metadata = {
  title: {
    absolute: "HVAC Project", // Prevents "| HVAC Designing" suffix
  },
  description:
    "Join the best online courses related to HVAC projects. Learn about real-world HVAC applications and controls for free.",
  openGraph: {
    title: "HVAC Project",
    description:
      "Learn about HVAC projects, real-world applications, and controls for free.",
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
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Project",
    description:
      "Master HVAC projects with hands-on tutorials and resources — free and beginner-friendly.",
    images: ["https://www.hvacdesigning.com/social-banner.png"],
  },
};

export default function Eng() {
  return (
    <div className="mt-8">
      {/* Page Heading */}
      <div className="flex justify-center items-center font-semibold text-2xl border border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh]">
        <h1>HVAC / Project</h1>
      </div>

      {/* Page Content */}
      <div className="mt-6">
        <article style={{ minHeight: "300px", width: "100%" }}>
          <Project />
        </article>
      </div>
    </div>
  );
}
