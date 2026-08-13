"use client";

import { useEffect, useState } from "react";

type ScrollPosition = {
  x: number;
  y: number;
};

export function useScrollPosition(delay = 100): ScrollPosition {
  // Store the initial scroll position safely
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: typeof window === "undefined" ? 0 : window.scrollX,
    y: typeof window === "undefined" ? 0 : window.scrollY,
  });

  useEffect(() => {
    // Return early if not running in a browser environment
    if (typeof window === "undefined") {
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let lastRan = 0;

    const handleScroll = () => {
      const now = Date.now();

      const updatePosition = () => {
        setScrollPosition({
          x: window.scrollX,
          y: window.scrollY,
        });
        lastRan = now;
      };

      // Leading edge execution or normal interval loop
      if (!lastRan || now - lastRan >= delay) {
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
        updatePosition();
      } else if (!timeoutId) {
        // Trailing edge execution to catch final scroll frame
        timeoutId = setTimeout(
          () => {
            updatePosition();
            timeoutId = null;
          },
          delay - (now - lastRan)
        );
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup listeners and timers on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [delay]);

  return scrollPosition;
}
