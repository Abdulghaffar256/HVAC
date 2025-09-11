"use client";

// ✅ Imports only
import HeatDissipationCalculator6 from "@/components/Load Calculator/ele/page";
import HeatTransferCalculator1 from "@/components/Load Calculator/exwall/page";
import HeatTransferCalculator2 from "@/components/Load Calculator/exglass/page";
import HeatTransferThroughRoof3 from "@/components/Load Calculator/exroof/page";
import HeatTransferCalculator7 from "@/components/Load Calculator/intwall/page";
import HeatGeneratedByLighting4 from "@/components/Load Calculator/light/page";
import HeatCalculator5 from "@/components/Load Calculator/people/page";

export default function LoadCalculatorPage() {
  return (
    <div className="max-w-5xl mx-auto p-8 mt-20 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-10">
        HVAC Load Calculators
      </h1>

      <div className="space-y-10">
        {/* ✅ External Wall */}
        <HeatTransferCalculator1 />

        {/* ✅ Glass */}
        <HeatTransferCalculator2 />

        {/* ✅ Roof */}
        <HeatTransferThroughRoof3 />

        {/* ✅ Internal Wall */}
        <HeatTransferCalculator7 />

        {/* ✅ Lighting */}
        <HeatGeneratedByLighting4 />

        {/* ✅ People */}
        <HeatCalculator5 />

        {/* ✅ Electrical Equipment */}
        <HeatDissipationCalculator6 />
      </div>
    </div>
  );
}
