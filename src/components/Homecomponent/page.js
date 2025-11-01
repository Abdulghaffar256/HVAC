"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HomeComponent = () => {
  const imageSets = {
    Designing: ["/hvac.webp"],
    Tools: ["/tools.webp"],
    Revit: ["/revit.webp"],
    controls: ["/control.webp"],
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
<section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-orange-50 via-orange-100 to-orange-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-3xl shadow-lg overflow-hidden">
  {/* Image Left */}
  <div className="flex justify-center order-1 md:order-none">
    <Image
      src="/about/team-photo.jpg"
      alt="HVAC Team"
      width={320}
      height={320}
      className="rounded-full shadow-2xl border-4 border-orange-300 dark:border-orange-500 hover:scale-105 transform transition duration-300 object-cover"
    />
  </div>

  {/* Text Right */}
  <div className="relative z-10 text-center md:text-left">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-800 dark:text-orange-300 mb-6 drop-shadow-sm">
      Our Story
    </h1>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
      At the heart of our platform lies a passion for sharing knowledge and innovation in HVAC design. 
      We believe in making learning an inspiring and practical experience. Our educational approach 
      goes beyond theory — focusing on real-world HVAC design practices, Revit MEP applications, and 
      energy-efficient system planning. Whether you're a seasoned engineer or just beginning your HVAC journey, 
      our resources are designed to help you grow, learn, and excel.
    </p>
  </div>
</section>

{/* Mission Section */}
<section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center bg-white dark:bg-gray-900 rounded-3xl shadow-md mt-12">
  {/* Text Left */}
  <div className="text-center md:text-left">
    <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">
      Our Mission
    </h2>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
      Our mission is to revolutionize HVAC design with AI-driven tools that create energy-efficient 
      HVAC systems. We aim to provide students with advanced HVAC design courses and certifications, 
      offering practical learning experiences to enhance their skills. By developing cutting-edge 
      tools and systems, we strive to empower the next generation of HVAC professionals to create 
      sustainable, high-performance designs.
    </p>
  </div>

  {/* Image Right */}
  <div className="flex justify-center">
    <div className="p-2 rounded-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 dark:from-pink-500 dark:to-pink-700">
      <Image
        src="/about/grow-better.jpg"
        alt="Grow Better"
        width={300}
        height={300}
        className="rounded-full shadow-2xl border-4 border-white dark:border-gray-900 hover:scale-105 transform transition duration-300 object-cover"
      />
    </div>
  </div>
</section>

  {/* Call to Action */}
<section className="relative max-w-6xl mx-auto px-6 py-20 text-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-3xl shadow-lg overflow-hidden">
  {/* Overlay for dark mode */}
  <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>

  <div className="relative z-10">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 drop-shadow-md">
      Ready to Shape the Future of HVAC Design?
    </h2>
    <p className="mb-8 text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
      Join our growing HVAC community and take your design skills to the next level. 
      Explore modern tools, resources, and expert insights to master HVAC system design.
    </p>
    <Link
      href="/signup"
      className="inline-block px-8 py-3 text-lg font-semibold text-blue-900 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
    >
      Get Started Today
    </Link>
  </div>
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


