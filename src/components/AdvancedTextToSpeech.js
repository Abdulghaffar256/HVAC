"use client";

import { useEffect, useState, useRef } from "react";

export default function AdvancedTextToSpeech() {
  const [text, setText] = useState("Welcome to our HVAC system calculator!");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const utteranceRef = useRef(null);

  useEffect(() => {
    const loadVoices = () => {
      const voicesList = speechSynthesis.getVoices();
      setVoices(voicesList);
      if (voicesList.length > 0) {
        setSelectedVoice(voicesList[0].name);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const speak = () => {
    if (isSpeaking) return;

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) utterance.voice = voice;
    utterance.rate = rate;
    utterance.pitch = pitch;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    speechSynthesis.speak(utterance);
    utteranceRef.current = utterance;
  };

  const pause = () => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
    }
  };

  const resume = () => {
    if (speechSynthesis.paused) {
      speechSynthesis.resume();
    }
  };

  const stop = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md max-w-xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Text-to-Speech Converter</h2>
      
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
        placeholder="Enter text to convert to speech"
      />

      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Voice</label>
          <select
            className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:text-white"
            value={selectedVoice}
            onChange={(e) => setSelectedVoice(e.target.value)}
          >
            {voices.map((voice, index) => (
              <option key={index} value={voice.name}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Rate: {rate.toFixed(1)}</label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Pitch: {pitch.toFixed(1)}</label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={pitch}
            onChange={(e) => setPitch(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-4">
        <button
          onClick={speak}
          disabled={isSpeaking}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          🔊 Speak
        </button>
        <button
          onClick={pause}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
        >
          ⏸ Pause
        </button>
        <button
          onClick={resume}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          ▶ Resume
        </button>
        <button
          onClick={stop}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
        >
          ⏹ Stop
        </button>
      </div>
    </div>
  );
}

