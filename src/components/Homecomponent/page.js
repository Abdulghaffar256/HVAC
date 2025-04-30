"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCalculator } from "react-icons/fa"; // Importing the calculator icon
import Link from "next/link"; // Importing Link for navigation

const HomeComponent = () => {
  const imageSets = {
    Designing: ["/images/mockup1.png"],
    Tools: ["/images/mockup4.png"],
    Revit: ["/images/mockup6.png"],
    controls: ["/images/mockup7.png"],
  };

  const tabContent = {
    Designing: {
      title: "Empowering Digital Innovation ",
      description:
        "We provide end-to-end solutions tailored for your business. From consulting to development, EPIC covers it all.",
    },
    Tools: {
      title: "Build Future-Ready Solutions",
      description:
        "With cutting-edge technology and agile development, we build scalable and robust applications for your needs.",
    },
    Revit: {
      title: "Strategies to Help You Sell Better",
      description:
        "Our marketing and e-commerce expertise helps you reach customers effectively and increase conversions.",
    },
    controls: {
      title: "Scale Your Business With Confidence",
      description:
        "We help you grow with smart infrastructure, automation, and long-term strategic planning.",
    },
  };

  // Ensure activeTab starts as a valid key from tabContent
  const [activeTab, setActiveTab] = useState("epic");

  // Check if activeTab exists in tabContent, else fallback to 'epic'
  const currentTabContent = tabContent[activeTab] || tabContent["epic"];
  const currentImage = imageSets[activeTab] ? imageSets[activeTab][0] : imageSets["epic"][0];

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
            {["epic", "build", "sell", "scale"].map((tab) => (
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

