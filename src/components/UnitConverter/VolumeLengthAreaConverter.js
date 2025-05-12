'use client';
import { useState } from 'react';

export default function VolumetricFlowConverter() {
  const [cms, setCms] = useState('');
  const [result, setResult] = useState({ cfm: '', lps: '' });

  const convert = () => {
    const c = parseFloat(cms);
    setResult({
      cfm: (c * 2118.88).toFixed(2),
      lps: (c * 1000).toFixed(2),
    });
  };

  return (
    <div>
      <h2>Volumetric Flow Converter (m³/s → CFM / L/s)</h2>
      <input
        type="number"
        value={cms}
        onChange={(e) => setCms(e.target.value)}
        placeholder="m³/s"
      />
      <button onClick={convert}>Convert</button>
      <p>CFM: {result.cfm}</p>
      <p>L/s: {result.lps}</p>
    </div>
  );
}
