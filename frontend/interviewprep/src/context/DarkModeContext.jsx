// src/contexts/DarkModeContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Use sessionStorage instead of localStorage
    // This persists only within the same tab session
    const savedTheme = sessionStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      sessionStorage.setItem("theme", "dark"); // Changed to sessionStorage
    } else {
      document.documentElement.classList.remove('dark');
      sessionStorage.setItem("theme", "light"); // Changed to sessionStorage
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};