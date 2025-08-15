"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tools = [
  {
    name: "HVAC Load Calculator",
    image: "/img/loadcalc.jpg",
    link: "/hvac-load-calculator",
    description: "Calculate heating and cooling loads with ease and accuracy.",
  },
  {
    name: "Unit Converter",
    image: "/img/unitconverter.jpg",
    link: "/unit-converter",
    description: "Convert HVAC-related units for temperature, pressure, and more.",
  },
  {
    name: "Duct Sizer",
    image: "/img/ductsizer.jpg",
    link: "/duct-sizer",
    description: "Determine optimal duct sizes based on airflow and velocity.",
  },
];

export default function HvacToolsPage() {
  const [volume, setVolume] = useState("");
  const [ach, setAch] = useState("");
  const [cfm, setCfm] = useState(null);

  const calculateCFM = () => {
    if (!volume || !ach) {
      setCfm(null);
      return;
    }
    const result = (Number(volume) * Number(ach)) / 60;
    setCfm(result.toFixed(2));
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        HVAC Tools
      </h1>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        {tools.map((tool, index) => (
          <Link
            key={index}
            href={tool.link}
            className="relative group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition duration-300 border-2 border-transparent hover:border-blue-600 hover:ring-2 hover:ring-blue-500"
          >
            <div className="relative w-full h-64">
              <Image
                src={tool.image}
                alt={tool.name}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                placeholder="empty"
                priority
              />
            </div>

            <div className="absolute inset-0 bg-black/30 group-hover:bg-white/20 backdrop-blur-sm transition-all duration-300 rounded-2xl z-10" />
            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold z-20 drop-shadow-md">
              {tool.name}
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              <p className="text-orange-700 text-sm drop-shadow-sm">
                {tool.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* ACH to CFM Calculator */}
      <section className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          ACH to CFM Calculator
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Room Volume (cubic feet)
            </label>
            <input
              type="number"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g. 1200"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Air Changes per Hour (ACH)
            </label>
            <input
              type="number"
              value={ach}
              onChange={(e) => setAch(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g. 8"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={calculateCFM}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Calculate
            </button>
          </div>
        </div>

        {/* Result Area */}
        {cfm !== null && (
          <div className="mt-6 p-6 bg-white border border-blue-200 rounded-lg shadow-inner text-center">
            <p className="text-lg font-medium text-gray-700 mb-3">
              Required CFM:
            </p>
            <p className="text-3xl font-bold text-blue-600">{cfm} CFM</p>

            {/* Load Bar */}
            <div className="mt-4 w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-blue-500 h-4 transition-all duration-500"
                style={{
                  width: `${Math.min((cfm / 2000) * 100, 100)}%`, // scale max 2000 CFM
                }}
              ></div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
