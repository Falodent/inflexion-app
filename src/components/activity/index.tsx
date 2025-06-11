"use client";

import { useEffect, useRef, useState } from "react";
import Sidebar from "./sidebar";
import SectionOne from "./sections/SectionOne";
import SectionTwo from "./sections/SectionTwo";
import SectionThree from "./sections/SectionThree";
import SectionFour from "./sections/SectionFour";
import clsx from "clsx";

const Activity = () => {
  const [active, setActive] = useState(1);
  const [progress, setProgress] = useState(0.1);
  const [shouldStick, setShouldStick] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progressRatio = scrollTop / scrollHeight;
      setProgress(progressRatio);

      if (progressRatio <= 0.25) setActive(1);
      else if (progressRatio <= 0.5) setActive(2);
      else if (progressRatio <= 0.75) setActive(3);
      else setActive(4);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.6) {
          setShouldStick(true);
          wrapper.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const atTop = scrollTop === 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight;
      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      if ((atTop && isScrollingUp) || (atBottom && isScrollingDown)) {
        e.preventDefault();
        window.scrollBy({
          top: e.deltaY * 1.5, // Increase speed
          behavior: "smooth", // Disable smooth scrolling delay
        });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const deltaY = startY - e.touches[0].clientY;
      const { scrollTop, scrollHeight, clientHeight } = container;

      const atTop = scrollTop <= 0.1;
      const atBottom = scrollTop + clientHeight >= scrollHeight;

      const isScrollingDown = deltaY > 0;
      const isScrollingUp = deltaY < 0;

      if ((atTop && isScrollingUp) || (atBottom && isScrollingDown)) {
        window.scrollBy({
          top: deltaY * 1.5,
          behavior: "smooth",
        });
      }
    };

    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Manual scroll to section
  const handleScroll = (id: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const sectionHeights = [0, 200, 1000, 1800, 2700];

    container.scrollTo({
      top: sectionHeights[id],
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={wrapperRef}
      className={clsx(
        "w-full h-screen sm:pt-25 flex items-center justify-center lg:px-4 bg-white transition-all duration-300 scrollbar-none",
        shouldStick ? "sticky top-0 z-30" : "relative z-10"
      )}
    >
      <div
        className={clsx(
          "w-full h-full pt-25 pb-8 grid grid-cols-1 lg:grid-cols-[1fr_660px] xl:grid-cols-2 gap-3 pr-4 lg:pr-0 scrollbar-none scroll-momentum",
          shouldStick ? "overflow-y-auto overscroll-contain md:overscroll-auto touch-pan-y" : "overflow-hidden"
        )}
        ref={scrollContainerRef}
      >
        <Sidebar
          active={active}
          progress={progress}
          handleClick={handleScroll}
        />

        <div
          className="w-full h-[550px] hidden lg:flex items-center justify-center bg-center bg-cover overflow-hidden lg:sticky top-0"
          style={{ backgroundImage: `url('/assets/png/activity-bg.png')` }}
        >
          {active === 1 && <SectionOne />}
          {active === 2 && <SectionTwo />}
          {active === 3 && <SectionThree />}
          {active === 4 && <SectionFour />}
        </div>
      </div>
    </div>
  );
};

export default Activity;
