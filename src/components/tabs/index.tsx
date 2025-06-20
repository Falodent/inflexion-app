"use client";

import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  content: string[];
  tabs: string[];
  order?: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

const AUTO_SWITCH_DELAY = 4000;
const INITIAL_DELAY = 2000;

const Tabs = ({ content, tabs, order = 1, setProgress }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cycleStartRef = useRef<number | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const getDisplayOrder = () => {
    const prev = (activeIndex - 1 + tabs.length) % tabs.length;
    const next = (activeIndex + 1) % tabs.length;
    const nextNext = (activeIndex + 2) % tabs.length;
    return [tabs[prev], tabs[activeIndex], tabs[next], tabs[nextNext]];
  };

  const getTabIndex = (tab: string) => tabs.indexOf(tab);
  const displayTabs = getDisplayOrder();

  useEffect(() => {
    const startTimer = setTimeout(() => {
      cycleStartRef.current = Date.now();
      setHasStarted(true);
    }, INITIAL_DELAY);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const totalCycle = AUTO_SWITCH_DELAY * tabs.length;

    const progressInterval = setInterval(() => {
      if (!cycleStartRef.current) return;

      const elapsed = Date.now() - cycleStartRef.current;
      const percentage = (elapsed / totalCycle) * 100;

      if (percentage >= 100) {
        cycleStartRef.current = Date.now();
        setProgress(0);
        setActiveIndex(0);
      } else {
        setProgress(percentage);
      }
    }, 100);

    const tabInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, AUTO_SWITCH_DELAY);

    return () => {
      clearInterval(progressInterval);
      clearInterval(tabInterval);
    };
  }, [hasStarted, tabs.length]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    cycleStartRef.current = Date.now();
    setProgress((index / tabs.length) * 100);
  };

  return (
    <div className="min-w-[665px] flex flex-col items-center -ml-24 relative transition-all duration-500">
      <div
        className={clsx(
          "flex gap-4 transition-all duration-500",
          order === 1 ? "items-start" : "items-end"
        )}
      >
        {displayTabs.map((tab, index) => {
          const actualIndex = getTabIndex(tab);
          const isCenter = actualIndex === activeIndex;

          return (
            <div
              key={tab}
              className="w-[200px] md:w-[240px] flex flex-col gap-1 md:gap-3 items-start relative"
            >
              {isCenter && content[actualIndex] && (
                <motion.p
                  key={content[actualIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-[210px] h-[100px] md:text-lg leading-[130%] text-black text-start"
                  style={{ order }}
                >
                  {content[actualIndex]}
                </motion.p>
              )}

              <p
                className={clsx(
                  "font-jetbrains text-[13px] tracking-[0.01em] uppercase cursor-pointer transition-all ease-in-out duration-500 whitespace-nowrap",
                  isCenter
                    ? "text-blue-100 scale-105"
                    : "text-[#ACACACB2] hover:text-black",
                  index === 3 && "opacity-0"
                )}
                onClick={() => handleTabClick(actualIndex)}
              >
                {tab}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
