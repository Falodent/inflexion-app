"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Scroller from "@/components/scroller";
import SideInfo from "@/components/side-info";
import ScrollProgress from "@/components/scroll-progress";
import { useScrollingStore } from "@/store/useScrollingStore";
import { useIsMobile } from "@/helpers/useIsMobile";

const HowItWorks = () => {
  const { setIsComplete } = useScrollingStore();
  const isMobile = useIsMobile();

  const [scrollProgress, setScrollProgress] = useState(0);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hideLeft, setHideLeft] = useState(false);
  const [rightSideOffset, setRightSideOffset] = useState(0);
  const [containerHeight, setContainerHeight] = useState(5000);

  const scrollFactor = 0.4; // consistent with scroll logic

  useEffect(() => {
    const horizontal = horizontalRef.current;
    const container = containerRef.current;

    if (!horizontal || !container) return;

    const scrollableWidth = horizontal.scrollWidth - horizontal.clientWidth;
    const dynamicHeight = scrollableWidth / scrollFactor + window.innerHeight;

    const remove = isMobile ? 1300 : 3000;
    setContainerHeight(dynamicHeight - remove);
  }, [isMobile]);

  // Handle scroll syncing
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const horizontal = horizontalRef.current;
      if (!container || !horizontal) return;

      const containerTop =
        container.getBoundingClientRect().top + window.scrollY;
      const scrollTop = window.scrollY;
      const relativeScroll = scrollTop - containerTop;

      if (
        scrollTop >= containerTop &&
        scrollTop < containerTop + container.offsetHeight - window.innerHeight
      ) {
        horizontal.scrollLeft = relativeScroll * scrollFactor;
      }

      setHideLeft(relativeScroll > 50);

      if (relativeScroll > 30) {
        const maxOffset = 128;
        const offset = Math.min(maxOffset, (relativeScroll - 30) * 2);
        setRightSideOffset(offset);
      } else {
        setRightSideOffset(0);
      }

      const progress = Math.min(
        1,
        relativeScroll / (container.offsetHeight - window.innerHeight)
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerTop = container.getBoundingClientRect().top + window.scrollY;
    const scrollTop = window.scrollY;

    if (scrollTop >= containerTop) {
      setIsComplete(scrollProgress >= 0.95);
    }
  }, [scrollProgress, setIsComplete]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
          container.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      },
      {
        root: null,
        threshold: 0.7,
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full" id="how-it-works">
      <div className="relative" style={{ height: `${containerHeight}px` }}>
        <section className="sticky top-0 h-screen pl-2 sm:pl-8 flex flex-col lg:flex-row overflow-hidden">
          <AnimatePresence mode="wait">
            {!hideLeft && (
              <motion.div
                key="sideinfo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <SideInfo displayed={!hideLeft} />
              </motion.div>
            )}

            {hideLeft && scrollProgress !== 1 && (
              <ScrollProgress progress={scrollProgress} />
            )}
          </AnimatePresence>

          <motion.div
            ref={horizontalRef}
            className="h-screen overflow-hidden pointer-events-none mt-10 xl:pt-[55px] pb-7 xl:pl-60 relative"
            style={{
              paddingLeft: `calc(8rem - ${rightSideOffset}px)`,
              transition: "padding-left 1s ease-out",
            }}
          >
            <div
              className="flex items-center h-full w-[4300px] lg:w-[4650px]"
              style={{ pointerEvents: "auto" }}
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
