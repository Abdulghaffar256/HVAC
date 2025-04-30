import React from "react";
import Development from "@/components/development/page";
import Head from 'next/head'; // Importing Head component for adding meta tags

export default function Developmentf() {
  return (
    <>
      {/* Adding the Head component for Open Graph and Twitter meta tags */}
      <Head>
        <title> HVAC Blogs </title>
        <meta property="og:title" content="  Educational websites help students read informative hvac blogs  and enroll in the best online free hvac courses and free hvac reated tools" />
        <meta
          property="og:description"
          content="Educational websites help students read informative hvac blogs  and enroll in the best online free hvac courses and free hvac reated tools"
        />
        <meta property="og:image" content="https://www.hvacdesigning.com/social-banner.png" />
        <meta property="og:url" content="https://www.hvacdesigning.com/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="  Educational websites help students read informative hvac blogs  and enroll in the best online free hvac courses and free hvac reated tools" />
        <meta
          name="twitter:description"
          content="Educational websites help students read informative hvac blogs  and enroll in the best online free hvac courses and free hvac reated tools"
        />
        <meta name="twitter:image" content="https://www.hvacdesigning.com/social-banner.png" />
      </Head>
      
      <div className="mt-8">
        {/* Second component */}
        <div className="flex justify-center align-middle font-semibold text-2xl border-[1px] border-solid border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh]" >
                 <h1>       HVAC Blogs  </h1>

        </div>
       <div className=" mt-6 "> <article  style={{ minHeight: '300px', width: '100%' }}>
          <Development />
        </article></div>
      </div>
    </>
  );
}
