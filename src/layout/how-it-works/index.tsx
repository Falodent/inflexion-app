"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// components
import Scroller from "@/components/scroller";
import SideInfo from "@/components/side-info";
import ScrollProgress from "@/components/scroll-progress";
import clsx from "clsx";
import { useScrollingStore } from "@/store/useScrollingStore";

const HowItWorks = () => {
  const { setIsComplete } = useScrollingStore();

  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [hideLeft, setHideLeft] = useState(false);
  const [rightSideOffset, setRightSideOffset] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const horizontal = horizontalRef.current;

    if (!container || !horizontal) return;

    const handleScroll = () => {
      const top = container.getBoundingClientRect().top;
      const scrollTop = container.scrollTop;

      if (top <= 120) {
        horizontal.scrollLeft = scrollTop;
      } else {
        container.scrollIntoView({ behavior: "smooth" });
        container.scrollTo({ top: 0 });
      }

      setHideLeft(scrollTop > 50);

      if (scrollTop > 30) {
        const maxOffset = 128;
        const offset = Math.min(maxOffset, (scrollTop - 30) * 2);
        setRightSideOffset(offset);
      } else {
        setRightSideOffset(0);
      }

      const progress =
        scrollTop / (container.scrollHeight - container.clientHeight);
      setScrollProgress(progress);
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (container) {
      const top = container.getBoundingClientRect().top;

      if (top <= 120) {
        if (scrollProgress === 1) {
          setIsComplete(true);
          return;
        }

        setIsComplete(false);
      }
    }
  }, [scrollProgress, setIsComplete]);

  return (
    <div
      ref={scrollContainerRef}
      className={clsx(
        "w-full h-screen overflow-y-scroll overflow-x-hidden top-0 scrollbar-none sticky"
      )}
    >
      <div style={{ height: "3730px" }} className="relative">
        <section className="sticky top-0 h-screen pl-8 flex overflow-hidden">
          <AnimatePresence mode="wait">
            {!hideLeft && <SideInfo />}

            {hideLeft && scrollProgress !== 1 && (
              <ScrollProgress progress={scrollProgress} />
            )}
          </AnimatePresence>

          <motion.div
            ref={horizontalRef}
            className="h-screen overflow-hidden pointer-events-none pt-[95px] pb-7 pl-60 relative"
            style={{
              paddingLeft: `calc(8rem - ${rightSideOffset}px)`,
              transition: "padding-left 1s ease-out",
            }}
          >
            <div
              className="flex items-center h-full"
              style={{ width: "4650px", pointerEvents: "auto" }}
            >
              <Scroller />
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
