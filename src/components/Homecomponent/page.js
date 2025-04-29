"use client";

import React, { useState } from "react";
import Image from "next/image";

const HomeComponent = () => {
  const imageSets = {
    epic: ["/images/mockup1.png"],
    build: ["/images/mockup2.png"],
    sell: ["/images/mockup3.png"],
    scale: ["/images/mockup4.png"],
  };

  const tabContent = {
     Designing: {
      title: "Learn Complete HVAC Desining with us ",
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
     Controls: {
      title: "Scale Your Business With Confidence",
      description:
        "We help you grow with smart infrastructure, automation, and long-term strategic planning.",
    },
  };

  const [activeTab, setActiveTab] = useState("epic");

  return (
    <section className="bg-white text-black min-h-[90vh] flex items-center justify-center px-4 md:px-12 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl w-full">
        
        {/* Text Content on Left */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold text-red-600 leading-tight mb-4">
            {tabContent[activeTab].title}
          </h1>
          <p className="text-lg md:text-xl text-black/80 mb-6">
            {tabContent[activeTab].description}
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-4 text-sm">
            {["epic", "build", "sell", "scale"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full border transition ${
                  activeTab === tab
                    ? "bg-red-600 text-white font-semibold"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                ● {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Image on Right */}
        <div className="flex-1 relative w-full max-w-md h-[300px] md:h-[400px]">
          <Image
            src={imageSets[activeTab][0]}
            alt={`${activeTab}-mockup`}
            fill
            className="object-contain rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
