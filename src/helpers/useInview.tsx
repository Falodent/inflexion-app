import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0); // 0 to 1

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the element is visible (0 to 1)
      const visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const totalHeight = rect.height;

      if (totalHeight <= 0) return;

      // Start tracking progress only if at least 50% of element is visible
      const visibilityRatio = visibleHeight / totalHeight;

      if (visibilityRatio < 0.5) {
        setProgress(0);
        return;
      }

      // Calculate progress from 50% visible up to fully visible (1)
      // Map [0.5, 1] visibilityRatio to [0, 1] progress
      const progressValue = (visibilityRatio - 0.5) * 2;

      setProgress(Math.min(1, Math.max(0, progressValue)));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return { ref, progress };
}
