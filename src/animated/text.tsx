"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface ScrollFillTextProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}

export const ScrollFillText: React.FC<ScrollFillTextProps> = ({
  children,
  containerClassName,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ref = containerRef.current;
    if (!ref) return;

    const handleScroll = () => {
      const rect = ref.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.5;
      const end = windowHeight * 0.5 + rect.height;

      const distance = end - start;
      const scrolled = rect.bottom - start;
      const rawProgress = 1 - scrolled / distance;
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

      setProgress(clampedProgress * 100);
    };

    // Observe visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) handleScroll();
      },
      { threshold: 0.5 }
    );

    observer.observe(ref);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className={containerClassName}>
      <span
        style={{
          backgroundSize: `${progress}% 100%`,
        }}
        className={clsx('text-fill', className)}
      >
        {children}
      </span>
    </div>
  );
};
