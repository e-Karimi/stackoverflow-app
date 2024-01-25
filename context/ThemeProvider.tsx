"use client";

import React, { useState, useEffect, createContext, useCallback } from "react";

interface ThemeContextType {
  mode: String;
  setMode: (mode: String) => void;
}

export const ThemeContext = createContext<ThemeContextType>({ mode: "", setMode: () => {} });

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<String>("");

  const handleThemeChange = useCallback(() => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.add("light");
    } else {
      setMode("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    handleThemeChange();
  }, [handleThemeChange]);

  return (
    <>
      <ThemeContext.Provider value={{ mode, setMode }}>{children}</ThemeContext.Provider>
    </>
  );
}
