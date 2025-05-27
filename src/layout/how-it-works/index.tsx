"use client";

import clsx from "clsx";
import { MoveRight } from "lucide-react";
import { useEffect, useRef } from "react";

// components
import Scroller from "@/components/scroller";

const HowItWorks = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const horizontal = horizontalRef.current;

    if (!container || !horizontal) return;

    const handleScroll = () => {
      const top = container.getBoundingClientRect().top;

      if (top <= 120) {
        horizontal.scrollLeft = container.scrollTop;
      } else {
        container.scrollTop = 0;
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="h-screen overflow-y-scroll overflow-x-hidden sticky top-0"
    >
      <div
        style={{
          height: "720vh",
        }}
      >
        <section className="sticky top-0 h-screen pl-8 grid grid-cols-[600px_1fr] overflow-x-hidden overflow-y-hidden">
          <div className="w-[600px] shrink-0 flex flex-col items-start gap-12 pt-[140px]">
            <h5 className="font-jetbrains text-[13px] leading-none uppercase tracking-[0.01em] text-blue-300">
              How it works
            </h5>

            <p className="font-[700] text-[48px] leading-[56px] -tracking-[0.03em] text-black-100">
              While others choose between speed or accuracy, our workflow
              delivers both — enabling you to build and monetize transcript
              libraries at unprecedented scale.
            </p>

            <div
              role="button"
              className={clsx(
                "px-5 border border-black rounded-[20px] cursor-pointer transition-all ease-in-out duration-500",
                "hover:bg-black text-black hover:text-white "
              )}
            >
              <MoveRight size={24} />
            </div>
          </div>

          <div
            ref={horizontalRef}
            className="h-screen overflow-x-hidden overflow-y-hidden pointer-events-none pt-[140px] relative"
          >
            <div
              className="flex items-center h-full"
              style={{
                width: "500vw",
                pointerEvents: "auto",
              }}
            >
              <Scroller />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
