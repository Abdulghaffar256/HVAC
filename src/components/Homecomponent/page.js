"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HomeComponent = () => {
  const imageSets = {
    Designing: ["/images/mockup1.png"],
    Tools: ["/images/mockup4.png"],
    Revit: ["../../images/revit.webp"],
    controls: ["/images/mockup7.png"],
  };

  const tabContent = {
    Designing: {
      title: "Energy-Efficient HVAC System Design",
      description:
        "Master energy-efficient HVAC design in our free course. Learn to create systems that maximize comfort and minimize environmental impact.",
    },
    Tools: {
      title: "HVAC Tools for Efficient System Design",
      description:
        "Leverage cutting-edge HVAC design tools for efficiency and sustainability. Streamline your process with accurate calculations and intuitive interfaces.",
    },
    Revit: {
      title: "Revit: Premier 3D HVAC Design Tool",
      description:
        "Discover why Revit is a top choice for 3D HVAC design. Our free course teaches you to harness its power for superior system modeling.",
    },
    controls: {
      title: "HVAC Controls for Enhanced Energy Efficiency",
      description:
        "Optimize HVAC performance with advanced control systems. Our course covers strategies to enhance energy efficiency and system responsiveness.",
    },
  };

  const [activeTab, setActiveTab] = useState("Designing");
  const currentImage = imageSets[activeTab][0];
  const currentTabContent = tabContent[activeTab];

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      {/* Tabs Section */}
      <section className="bg-[#F9FAFB] text-[#2E2E2E] min-h-[90vh] flex items-center justify-center px-4 md:px-12 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl w-full">
          {/* Text Content */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-bold text-[#1F3B4D] leading-tight mb-4">
              {currentTabContent?.title || "Title Not Available"}
            </h1>
            <p className="text-lg md:text-xl text-[#2E2E2E]/80 mb-6">
              {currentTabContent?.description || "Description Not Available"}
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-4 text-sm">
              {["Designing", "Tools", "Revit", "controls"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full border transition ${
                    activeTab === tab
                      ? "bg-[#FF6F61] text-white font-semibold"
                      : "bg-[#A2D5F2] text-[#1F3B4D] hover:bg-[#10B981] hover:text-white"
                  }`}
                >
                  ● {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative w-full max-w-md h-[300px] md:h-[400px]">
            <Image
              src={currentImage}
              alt={`${activeTab}-mockup`}
              fill
              className="object-contain rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
     
      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center bg-blue-50 dark:bg-gray-800">
        <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-300 mb-4">Our Story

</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        At the heart of our platform lies a commitment to sharing knowledge and expertise in HVAC design. We believe that learning should be an engaging and enriching experience. Our unique approach to HVAC education is designed to offer you not only the technical skills needed but also an understanding of the intricacies of Revit MEP HVAC systems and beyond. Crafted with care, our content is tailored to inspire both professionals and newcomers alike. Join us and dive into a world of practical and informative HVAC insights.
        </p>
        <div className="mt-6">
          <Image
            src="/about/team-photo.jpg"
            alt="HVAC Team"
            width={600}
            height={350}
            className="mx-auto rounded-lg shadow border-4 border-blue-200 dark:border-blue-500"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center bg-white dark:bg-gray-900">
        <div>
          <Image
            src="/about/grow-better.jpg"
            alt="Grow Better"
            width={500}
            height={350}
            className="rounded-lg shadow border-4 border-blue-100 dark:border-blue-500"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-4">Our Mission</h2>
          <p>
          Our mission is to revolutionize HVAC design with AI-driven tools that create energy-efficient HVAC systems. We aim to provide students with advanced HVAC design courses and certifications, offering practical learning experiences to enhance their skills. By developing cutting-edge tools and systems, we strive to empower the next generation of HVAC professionals to create sustainable, high-performance designs.
          </p>
        </div>
      </section>

     

      {/* Call to Action */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center bg-blue-100 dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Ready to Join Us?</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">Join our growing HVAC community and elevate your design career today!</p>
        <Link
          href="/signup"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Get Started
        </Link>
      </section>
         {/* Floating Text-to-Voice Button */}
<Link
  href="/text-to-speech"
  className="fixed bottom-6 right-6 z-50 
             bg-pink-600 hover:bg-pink-700 
             dark:bg-pink-500 dark:hover:bg-pink-600 
             text-white px-4 py-3 rounded-full 
             shadow-lg flex items-center space-x-2 
             transition duration-300"
  aria-label="Go to Text-to-Voice"
>
  <span role="img" aria-label="speaker">🔊</span>
  <span className="hidden sm:inline">Text to Voice</span>
</Link>

    </div>
  );
};

export default HomeComponent;


