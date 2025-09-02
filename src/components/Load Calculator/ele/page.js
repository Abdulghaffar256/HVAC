"use client";

import React, { useState } from "react";

const HeatDissipationCalculator6 = ({ onCalculate }) => {
  const [heatDissipation, setHeatDissipation] = useState(0);
  const [numEquipment, setNumEquipment] = useState(0);
  const [totalHeat, setTotalHeat] = useState(null);

  const calculateHeatDissipation = () => {
    if (heatDissipation <= 0 || isNaN(heatDissipation)) {
      alert("Please enter a valid heat dissipation value.");
      return;
    }

    if (numEquipment <= 0 || isNaN(numEquipment)) {
      alert("Please enter a valid number of equipment.");
      return;
    }

    const totalHeatGenerated = heatDissipation * numEquipment;
    setTotalHeat(totalHeatGenerated);

    // 🔥 Send the calculated value to parent component
    if (onCalculate) {
      console.log("Sending heat dissipation value:", totalHeatGenerated);
      onCalculate(totalHeatGenerated);
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md mb-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Heat Dissipation by Electric Equipment
      </h1>

      <div className="mb-4">
        <label className="block mb-1 font-medium">
          Heat Dissipation per Equipment (Btu/h):
        </label>
        <input
          type="number"
          value={heatDissipation}
          onChange={(e) => setHeatDissipation(parseFloat(e.target.value) || 0)}
          className="w-full p-2 border rounded"
          min="0"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Number of Equipment:</label>
        <input
          type="number"
          value={numEquipment}
          onChange={(e) => setNumEquipment(parseFloat(e.target.value) || 0)}
          className="w-full p-2 border rounded"
          min="1"
        />
      </div>

      <button
        onClick={calculateHeatDissipation}
        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
      >
        Calculate Heat Dissipation
      </button>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Result</h2>
        {totalHeat !== null ? (
          <p className="text-lg">
            Total Heat Dissipation:{" "}
            <strong>{totalHeat.toFixed(2)} Btu/h</strong>
          </p>
        ) : (
          <p className="text-gray-600">
            Enter values to calculate heat dissipation.
          </p>
        )}
      </div>
    </div>
  );
};

export default HeatDissipationCalculator6;
