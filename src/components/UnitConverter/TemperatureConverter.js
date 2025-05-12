'use client';
import { useState } from 'react';

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [result, setResult] = useState({ fahrenheit: '', kelvin: '' });

  const convert = () => {
    const c = parseFloat(celsius);
    setResult({
      fahrenheit: (c * 9/5 + 32).toFixed(2),
      kelvin: (c + 273.15).toFixed(2),
    });
  };

  return (
    <div>
      <h2>Temperature Converter (°C → °F / K)</h2>
      <input
        type="number"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        placeholder="Celsius"
      />
      <button onClick={convert}>Convert</button>
      <p>Fahrenheit: {result.fahrenheit} °F</p>
      <p>Kelvin: {result.kelvin} K</p>
    </div>
  );
}

