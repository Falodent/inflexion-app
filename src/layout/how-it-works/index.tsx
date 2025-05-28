"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// components
import Scroller from "@/components/scroller";
import SideInfo from "@/components/side-info";
import ScrollProgress from "@/components/scroll-progress";
import { useScrollingStore } from "@/store/useScrollingStore";

const HowItWorks = () => {
  const { setIsScrolling } = useScrollingStore();

  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [hideLeft, setHideLeft] = useState(false);
  const [rightSideOffset, setRightSideOffset] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const horizontal = horizontalRef.current;

    if (!container || !horizontal) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const top = container.getBoundingClientRect().top;
      const scrollTop = container.scrollTop;

      if (top <= 120) {
        horizontal.scrollLeft = scrollTop;
      } else {
        container.scrollTop = 0;
      }

      setHideLeft(scrollTop > 60);

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

      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [setIsScrolling]);

  return (
    <div
      ref={scrollContainerRef}
      className="w-full h-screen overflow-y-scroll overflow-x-hidden sticky top-0 scrollbar-none"
    >
      <div style={{ height: "6000px" }}>
        <section className="sticky top-0 h-screen pl-8 flex overflow-hidden">
          {/* LEFT SIDE */}
          <AnimatePresence mode="wait">
            {!hideLeft && <SideInfo show={hideLeft} />}

            {hideLeft && <ScrollProgress progress={scrollProgress} />}
          </AnimatePresence>

          <motion.div
            ref={horizontalRef}
            className="h-screen overflow-hidden pointer-events-none pt-[65px] pb-7 pl-35 relative"
            style={{
              paddingLeft: `calc(8rem - ${rightSideOffset}px)`,
              transition: "padding-left 1s ease-out",
            }}
          >
            <div
              className="flex items-center h-full"
              style={{ width: "6400px", pointerEvents: "auto" }}
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
