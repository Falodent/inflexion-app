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
          "w-full h-full pt-25 pb-8 grid grid-cols-1 lg:grid-cols-[1fr_660px] xl:grid-cols-2 gap-3 pr-4 lg:pr-0 scrollbar-none",
          shouldStick ? "overflow-y-auto" : "overflow-hidden"
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
