// src/components/DarkModeToggle.jsx
import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`px-3 py-2 rounded border border-amber-950 transition-colors duration-300${
          darkMode ? 'bg-gray-500' : 'bg-gray-900'
        }`}
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}