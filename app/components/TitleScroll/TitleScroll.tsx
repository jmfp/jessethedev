"use client";
import { useEffect, useState } from "react";

const words = ["Websites", "Apps", "Games", "AI", "Design"];

export function useTitleScroll() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return `Hi I'm Jesse And I Build ${words[currentWord]}.`;
}
