"use client";

import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  content: string[];
  tabs: string[];
  order?: number;
}

const AUTO_SWITCH_DELAY = 4000;

const Tabs = ({ content, tabs, order = 1 }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const getDisplayOrder = () => {
    const prev = (activeIndex - 1 + tabs.length) % tabs.length;
    const next = (activeIndex + 1) % tabs.length;
    const nextNext = (activeIndex + 2) % tabs.length;

    return [tabs[prev], tabs[activeIndex], tabs[next], tabs[nextNext]];
  };

  const getTabIndex = (tab: string) => tabs.indexOf(tab);
  const displayTabs = getDisplayOrder();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, AUTO_SWITCH_DELAY);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex]);

  const handleTabClick = (index: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveIndex(index);
  };

  return (
    <div className="min-w-[665px] flex flex-col items-center -ml-24 transition-all duration-500 relative">
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
              className="w-[240px] flex flex-col gap-3 items-start relative"
            >
              {isCenter && content[actualIndex] && (
                <motion.p
                  key={content[actualIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-[210px] h-[100px] text-lg leading-[130%] text-black text-start"
                  style={{ order }}
                >
                  {content[actualIndex]}
                </motion.p>
              )}

              <p
                key={tab}
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
