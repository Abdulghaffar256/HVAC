
import React from "react";
import Equipment from "@/components/Equipment/page";
import Head from 'next/head'; // Importing Head component for adding meta tags

export default function equipment() {
  return (
    <>
      {/* Adding the Head component for Open Graph and Twitter meta tags */}
      <Head>
        <title>HVAC Designing </title>
        <meta property="og:title" content="Master HVAC design with theory, calculations, and hands-on projects. Learn load/ductwork sizing, industry tools, and energy-efficient solutions for residential/commercial systems. Ideal for engineers, technicians, and students. Enroll now!  " />
        <meta
          property="og:description"
          content="Master HVAC design with theory, calculations, and hands-on projects. Learn load/ductwork sizing, industry tools, and energy-efficient solutions for residential/commercial systems. Ideal for engineers, technicians, and students. Enroll now!"
        />
        <meta property="og:image" content="https://www.hvacdesigning.com
/social-banner.png" />
        <meta property="og:url" content="https://www.hvacdesigning.com/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Master HVAC design with theory, calculations, and hands-on projects. Learn load/ductwork sizing, industry tools, and energy-efficient solutions for residential/commercial systems. Ideal for engineers, technicians, and students. Enroll now!" />
        <meta
          name="twitter:description"
          content="Master HVAC design with theory, calculations, and hands-on projects. Learn load/ductwork sizing, industry tools, and energy-efficient solutions for residential/commercial systems. Ideal for engineers, technicians, and students. Enroll now!"
        />
        <meta name="twitter:image" content="https://www./www.hvacdesigning.com/social-banner.png" />
      </Head>
      
      <div className="mt-8">
        {/* Second component */}
        <div className="flex justify-center align-middle font-semibold text-2xl border-[1px] border-solid border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh]" >
      <h1> HVAC Designing </h1> 

        </div>
       <div className=" mt-6 "> <article  style={{ minHeight: '300px', width: '100%' }}>
          <Equipment />
        </article></div>
      </div>
    </>
  );
}
