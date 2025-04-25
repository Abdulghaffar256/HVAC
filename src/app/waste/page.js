
import React from "react";
import Waste from "@/components/waste/page";
import Head from 'next/head'; // Importing Head component for adding meta tags

export default function waste() {
  return (
    <>
      {/* Adding the Head component for Open Graph and Twitter meta tags */}
      <Head>
        <title>Waste Management </title>
        <meta property="og:title" content="Best online courses & Blogs related to Green buildings and Energy" />
        <meta
          property="og:description"
          content="Best online courses & Blogs related toGreen buildings and Energy"
        />
        <meta property="og:image" content="https://www.epicssolution.com/social-banner.png" />
        <meta property="og:url" content="https://www.epicssolution.com/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best online courses & Blogs related to Green buildings and Energy" />
        <meta
          name="twitter:description"
          content="Best online courses & Blogs related to working of Green buildings and EnergyT"
        />
        <meta name="twitter:image" content="https://www.epicssolution.com/social-banner.png" />
      </Head>
      
      <div className="mt-8">
        {/* Second component */}
        <div className="flex justify-center align-middle font-semibold text-2xl border-[1px] border-solid border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh]" >
      <h1> Green buildings and Energy blogs & courses </h1> 

        </div>
       <div className=" mt-6 "> <article  style={{ minHeight: '300px', width: '100%' }}>
          <Waste />
        </article></div>
      </div>
    </>
  );
}
