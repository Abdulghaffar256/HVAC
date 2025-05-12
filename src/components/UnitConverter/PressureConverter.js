'use client';
import { useState } from 'react';

export default function PressureConverter() {
  const [pascal, setPascal] = useState('');
  const [result, setResult] = useState({ psi: '', bar: '' });

  const convert = () => {
    const p = parseFloat(pascal);
    setResult({
      psi: (p * 0.0001450377).toFixed(4),
      bar: (p * 0.00001).toFixed(4),
    });
  };

  return (
    <div>
      <h2>Pressure Converter (Pa → psi / bar)</h2>
      <input
        type="number"
        value={pascal}
        onChange={(e) => setPascal(e.target.value)}
        placeholder="Pascal"
      />
      <button onClick={convert}>Convert</button>
      <p>PSI: {result.psi} psi</p>
      <p>Bar: {result.bar} bar</p>
    </div>
  );
}

