"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeProvider";

export function useTheme() {
  const { mode } = useContext(ThemeContext);

  if (mode === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return mode;
}
