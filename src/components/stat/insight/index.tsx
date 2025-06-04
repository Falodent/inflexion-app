"use client";

import { useEffect, useRef, useState } from "react";

// component
import Stat from "..";

// helpers
import { formatFigure } from "@/helpers/formatFigure";

const InsightCounter = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // figures
  const [accuracy, setAccuracy] = useState(10000);
  const [timer, setTimer] = useState(60);
  const [figure, setFigure] = useState(500_000_000);
  const [minute, setMinute] = useState(500_000);

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
      { threshold: 1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const start = 10000;
    const end = 20000;
    const duration = 950;
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
    }, 13.5);

    return () => clearInterval(interval);
  }, [visible, timer]);

  useEffect(() => {
    if (!visible) return;

    const start = 500_000_000;
    const end = 1_000_000_000;
    const duration = 950;
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

  useEffect(() => {
    if (!visible) return;

    const start = 500_000;
    const end = 1_000_000;
    const duration = 950;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(start + (end - start) * progress);

      setMinute(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [visible]);

  const formattedFigure = formatFigure(figure);
  const formattedMinute = formatFigure(minute);

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col lg:grid lg:grid-cols-2 xl:flex xl:flex-row items-start gap-11 xl:gap-4 lg:justify-between"
    >
      <Stat
        figure={`${accuracy.toLocaleString("en-GB")}+`}
        title="Companies in our finance dictionary"
        color="text-white"
        subcolor="text-white/70 max-w-[270px] text-xl"
      />

      <Stat
        figure={`< ${timer} %`}
        title="Acceptance rate for finance editorial team"
        color="text-white"
        subcolor="text-white/70 max-w-[270px] text-xl"
      />

      <Stat
        figure={`$${formattedFigure === "1B" ? "B" : formattedFigure}+`}
        title="Financial institutions we serve"
        color="text-white"
        subcolor="text-white/70 max-w-[270px] text-xl"
      />

      <Stat
        figure={`${formattedMinute === "1.0M" ? "Million" : formattedMinute}+`}
        title="Minutes transcribed annually"
        color="text-white"
        subcolor="text-white/70 max-w-[270px] text-xl"
      />
    </div>
  );
};

export default InsightCounter;
