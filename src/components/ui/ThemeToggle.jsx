"use client";

import { useState, useEffect } from "react";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState("gamezone-dark");

  useEffect(() => {
    const saved = localStorage.getItem("gz-theme") || "gamezone-dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  function toggle() {
    const next = theme === "gamezone-dark" ? "gamezone-light" : "gamezone-dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("gz-theme", next);
  }

  const isDark = theme === "gamezone-dark";

  return (
    <button
      onClick={toggle}
      className={`btn btn-ghost btn-sm btn-square rounded-xl ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <RiSunLine className="text-lg text-gz-warning" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <RiMoonClearLine className="text-lg text-primary" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
