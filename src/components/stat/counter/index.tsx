"use client";

import { useEffect, useRef, useState } from "react";

// component
import Stat from "..";

// helpers
import { formatFigure } from "@/helpers/formatFigure";

const Counter = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // figures
  const [accuracy, setAccuracy] = useState(70);
  const [timer, setTimer] = useState(60);
  const [figure, setFigure] = useState(500_000_000);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.8 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const start = 70;
    const end = 99.9;
    const duration = 500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = start + (end - start) * progress;

      setAccuracy(parseFloat(value.toFixed(1)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [visible]);

  useEffect(() => {
    if (!visible || timer <= 1) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 1;
        }
        return prev - 1;
      });
    }, 8);

    return () => clearInterval(interval);
  }, [visible, timer]);

  useEffect(() => {
    if (!visible) return;

    const start = 500_000_000;
    const end = 1_000_000_000;
    const duration = 500;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(start + (end - start) * progress);

      setFigure(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [visible]);

  return (
    <div ref={containerRef} className="w-full flex flex-col lg:flex-row lg:items-start gap-16">
      <Stat figure={`${accuracy}%`} title="Human-perfect accuracy delivered" />
      <Stat figure={`< ${timer} sec`} title="Real-time transcription latency" />
      <Stat
        figure={`${formatFigure(figure)} +`}
        title="Finance words transcribed"
      />
    </div>
  );
};

export default Counter;
