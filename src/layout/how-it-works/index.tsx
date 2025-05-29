"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// components
import Scroller from "@/components/scroller";
import SideInfo from "@/components/side-info";
import ScrollProgress from "@/components/scroll-progress";

const HowItWorks = () => {
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

  return (
    <div
      ref={scrollContainerRef}
      className="w-full h-screen overflow-y-scroll overflow-x-hidden sticky top-0 scrollbar-none"
    >
      <div style={{ height: "4300px" }}>
        <section className="sticky top-0 h-screen pl-8 flex overflow-hidden">
          <AnimatePresence mode="wait">
            {!hideLeft && <SideInfo />}

            {hideLeft && <ScrollProgress progress={scrollProgress} />}
          </AnimatePresence>

          <motion.div
            ref={horizontalRef}
            className="h-screen overflow-hidden pointer-events-none pt-[65px] pb-7 pl-60 relative"
            style={{
              paddingLeft: `calc(8rem - ${rightSideOffset}px)`,
              transition: "padding-left 1s ease-out",
            }}
          >
            <div
              className="flex items-center h-full"
              style={{ width: "4850px", pointerEvents: "auto" }}
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
