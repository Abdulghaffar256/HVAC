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
    <div className="max-w-6xl mx-auto p-8 mt-20 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-10">
        HVAC Load Calculators
      </h1>

      {/* ✅ 2-column responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ✅ External Wall */}
        <div className="p-6 border border-gray-300 rounded-xl shadow bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            External Wall Heat Transfer
          </h2>
          <HeatTransferCalculator1 />
        </div>

        {/* ✅ Glass */}
        <div className="p-6 border border-gray-300 rounded-xl shadow bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Glass Heat Transfer
          </h2>
          <HeatTransferCalculator2 />
        </div>

        {/* ✅ Roof */}
        <div className="p-6 border border-gray-300 rounded-xl shadow bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Roof Heat Transfer
          </h2>
          <HeatTransferThroughRoof3 />
        </div>

        {/* ✅ Internal Wall */}
        <div className="p-6 border border-gray-300 rounded-xl shadow bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Internal Wall Heat Transfer
          </h2>
          <HeatTransferCalculator7 />
        </div>

        {/* ✅ Lighting */}
        <div className="p-6 border border-gray-300 rounded-xl shadow bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Lighting Heat Generation
          </h2>
          <HeatGeneratedByLighting4 />
        </div>

        {/* ✅ People */}
        <div className="p-6 border border-gray-300 rounded-xl shadow bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            People Heat Gain
          </h2>
          <HeatCalculator5 />
        </div>

        {/* ✅ Electrical Equipment (full row) */}
        <div className="p-6 border border-gray-300 rounded-xl shadow bg-gray-50 md:col-span-2">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Electrical Equipment Heat Dissipation
          </h2>
          <HeatDissipationCalculator6 />
        </div>
      </div>
    </div>
  );
}
