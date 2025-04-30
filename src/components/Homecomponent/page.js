"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCalculator } from "react-icons/fa"; // Importing the calculator icon
import Link from "next/link"; // Importing Link for navigation

const HomeComponent = () => {
  // Define image sets with their respective keys
  const imageSets = {
    Designing: ["/images/mockup1.png"],
    Tools: ["/images/mockup4.png"],
    Revit: ["/images/mockup6.png"],
    controls: ["/images/mockup7.png"],
  };

  // Define tab content with corresponding keys
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
  Controls: {
    title: "HVAC Controls for Enhanced Energy Efficiency",
    description:
      "Optimize HVAC performance with advanced control systems. Our course covers strategies to enhance energy efficiency and system responsiveness.",
  },
};

  // Mapping between tab names (UI) and data keys
  const tabMapping = {
    Designing: "Designing",
    Tools: "Tools",
    Revit: "Revit",
    controls: "controls",
  };

  // Initialize activeTab with a valid tab name
  const [activeTab, setActiveTab] = useState("epic");

  // Get the corresponding key from the mapping, defaulting to "Designing" if invalid
  const currentKey = tabMapping[activeTab] || "Designing";

  // Access image and content using the mapped key
  const currentImage = imageSets[currentKey][0];
  const currentTabContent = tabContent[currentKey];

  return (
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

      {/* Calculator Button */}
      <div className="fixed bottom-10 right-10">
        <Link href="/Load Calculator">
          <button
            className="bg-[#FF6F61] p-4 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[#F95D4B] transition"
            aria-label="Open Load Calculator"
          >
            <FaCalculator size={24} />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeComponent;
