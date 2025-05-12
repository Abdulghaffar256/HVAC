"use client";
import React, { useState } from "react";

const categories = {
  Length: ["m", "ft", "in"],
  Area: ["m²", "ft²"],
  Volume: ["m³", "ft³"],
};

const convert = (value, from, to) => {
  const val = parseFloat(value);
  if (isNaN(val)) return "";

  // Length conversions
  const lengthToMeters = {
    m: 1,
    ft: 0.3048,
    in: 0.0254,
  };

  // Area conversions
  const areaToSqMeters = {
    "m²": 1,
    "ft²": 0.092903,
  };

  // Volume conversions
  const volumeToCubicMeters = {
    "m³": 1,
    "ft³": 0.0283168,
  };

  let meters;
  if (from in lengthToMeters && to in lengthToMeters) {
    meters = val * lengthToMeters[from];
    return meters / lengthToMeters[to];
  } else if (from in areaToSqMeters && to in areaToSqMeters) {
    const sqm = val * areaToSqMeters[from];
    return sqm / areaToSqMeters[to];
  } else if (from in volumeToCubicMeters && to in volumeToCubicMeters) {
    const m3 = val * volumeToCubicMeters[from];
    return m3 / volumeToCubicMeters[to];
  }

  return "Unsupported conversion";
};

const VolumeLengthAreaConverter = () => {
  const [category, setCategory] = useState("Length");
  const [input, setInput] = useState("");
  const [from, setFrom] = useState("m");
  const [to, setTo] = useState("ft");

  const units = categories[category];
  const result = convert(input, from, to);

  return (
    <div className="space-y-4">
      <select
        className="border p-2 rounded w-full"
        value={category}
        onChange={(e) => {
          const cat = e.target.value;
          setCategory(cat);
          setFrom(categories[cat][0]);
          setTo(categories[cat][1]);
        }}
      >
        {Object.keys(categories).map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      <input
        type="number"
        className="border px-3 py-2 rounded w-full"
        placeholder="Enter value"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex gap-4">
        <select
          className="border p-2 rounded w-1/2"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          {units.map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>

        <select
          className="border p-2 rounded w-1/2"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          {units.map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>
      </div>

      <div className="font-semibold text-purple-700">
        Result: {isNaN(result) ? "Invalid Input" : result.toFixed(4)} {to}
      </div>
    </div>
  );
};

export default VolumeLengthAreaConverter;

