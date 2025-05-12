"use client";
import React, { useState } from "react";

const velocityUnits = ["m/s", "ft/min", "km/h", "mph"];

const convertVelocity = (value, from, to) => {
  let mps;

  // Convert to meters per second (m/s) first
  switch (from) {
    case "m/s":
      mps = value;
      break;
    case "ft/min":
      mps = value / 196.85;
      break;
    case "km/h":
      mps = value / 3.6;
      break;
    case "mph":
      mps = value / 2.2369;
      break;
    default:
      return value;
  }

  // Convert from m/s to target unit
  switch (to) {
    case "m/s":
      return mps;
    case "ft/min":
      return mps * 196.85;
    case "km/h":
      return mps * 3.6;
    case "mph":
      return mps * 2.2369;
    default:
      return value;
  }
};

const AirVelocityConverter = () => {
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("m/s");
  const [to, setTo] = useState("ft/min");

  const result = convertVelocity(parseFloat(input), from, to);

  return (
    <div className="space-y-4">
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border px-3 py-2 rounded w-full"
        placeholder="Enter value"
      />
      <div className="flex justify-between gap-4">
        <select value={from} onChange={(e) => setFrom(e.target.value)} className="border p-2 rounded w-1/2">
          {velocityUnits.map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>
        <select value={to} onChange={(e) => setTo(e.target.value)} className="border p-2 rounded w-1/2">
          {velocityUnits.map((unit) => (
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

export default AirVelocityConverter;

