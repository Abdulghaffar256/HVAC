"use client";

import Image from "next/image";
import Link from "next/link";

const tools = [
  {
    name: "Load Calculator",
    image: "/loadcalc.jpg",
    link: "/loadcalculator",
    description: "Calculate heating and cooling loads with ease and accuracy.",
  },
  {
    name: "Unit Converter",
    image: "/unitconverter.jpg",
    link: "/unit-converter",
    description: "Convert HVAC-related units for temperature, pressure, and more.",
  },
  {
    name: "Duct Sizer",
    image: "/ductsizer.jpg", // Make sure this image exists in your public/images folder
    link: "/duct-sizer", // Adjust this link based on your actual route
    description: "Determine optimal duct sizes based on airflow and velocity.",
  },
];

export default function HvacToolsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        HVAC Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <Link
            key={index}
            href={tool.link}
            className="relative group h-64 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition duration-300 border-2 border-transparent hover:border-blue-600 hover:ring-2 hover:ring-blue-500"
          >
            <Image
              src={tool.image}
              alt={tool.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-red-400 group-hover:bg-white backdrop-blur-sm transition-all duration-300 rounded-2xl" />

            {/* Tool Title */}
            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold z-10 drop-shadow-md">
              {tool.name}
            </div>

            {/* Description on Hover */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
              <p className="text-orange-700 text-sm drop-shadow-sm">
                {tool.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

