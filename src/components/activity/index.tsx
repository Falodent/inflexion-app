"use client";

import { useEffect, useRef, useState } from "react";
import Sidebar from "./sidebar";
import SectionOne from "./sections/SectionOne";
import SectionTwo from "./sections/SectionTwo";
import SectionThree from "./sections/SectionThree";
import SectionFour from "./sections/SectionFour";

const Activity = () => {
  const [active, setActive] = useState(1);
  const [progress, setProgress] = useState(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;

      const progress =
        scrollTop / (container.scrollHeight - container.clientHeight);
      setProgress(progress);

      if (progress <= 0.25) {
        setActive(1);
      } else if (progress <= 0.5) {
        setActive(2);
      } else if (progress <= 0.75) {
        setActive(3);
      } else {
        setActive(4);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="w-full h-screen sticky top-0 pt-25 flex items-center justify-center px-4 bg-white">
      <div
        className="w-full h-[550px] grid grid-cols-2 gap-3 overflow-y-auto scrollbar-none"
        ref={scrollContainerRef}
      >
        <Sidebar active={active} progress={progress} />

        <div
          className="w-full h-[550px] flex items-center justify-center bg-center bg-cover overflow-hidden sticky top-0"
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
