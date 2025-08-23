import Project from "@/components/project/page";
import Head from "next/head";

export default function Eng() {
  return (
    <>
      <Head>
        <title>HVAC | Project</title>
        <meta
          name="description"
          content="Join the best online courses related to HVAC control. Learn about HVAC controls for free."
        />
        <meta property="og:title" content="HVAC / Project" />
        <meta
          property="og:description"
          content="Learn about HVAC controls for free in this hands-on project."
        />
        <meta
          property="og:image"
          content="https://www.hvacdesigning.com/social-banner.png"
        />
        <meta
          property="og:url"
          content="https://www.hvacdesigning.com/project"
        />
        <meta property="og:site_name" content="HVAC / Project" />
      </Head>

      <div className="mt-8">
        <div className="flex justify-center align-middle font-semibold text-2xl border border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh]">
          <h1>HVAC / Project</h1>
        </div>

        <div className="mt-6">
          <article style={{ minHeight: "300px", width: "100%" }}>
            <Project />
          </article>
        </div>
      </div>
    </>
  );
}
