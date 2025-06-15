"use client";
import { useEffect, useState } from "react";

export function useTitleScroll() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Websites", "Apps", "Games", "AI", "Design"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentWord, words.length]);

  return `Hi I'm Jesse And I Build ${words[currentWord]}.`;
}
