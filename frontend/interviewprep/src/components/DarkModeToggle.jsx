// src/components/DarkModeToggle.jsx
import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-colors duration-300"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}