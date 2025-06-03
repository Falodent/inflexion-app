"use client";

import { useEffect, useRef, useState } from "react";
import InsightCounter from "@/components/stat/insight";
import clsx from "clsx";

const Insight = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.2) {
          setIsVisible(true); 
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={clsx(
        "w-full py-30 px-8 flex flex-col gap-[178px] transition-colors duration-700",
        isVisible ? "bg-black-100 text-white" : "bg-white text-black"
      )}
    >
      <div className="max-w-[960px] text-[40px] font-[500] leading-[49px] pr-2 -tracking-[0.03em]">
        <span>
          Our transcripts power insights for multi-billion dollar buy-side and
          sell-side institutions, global expert networks, and financial data
          providers serving thousands of investment professionals.
        </span>
      </div>

      <InsightCounter />
    </section>
  );
};

export default Insight;
