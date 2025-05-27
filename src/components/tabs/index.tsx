"use client";

import { useState } from "react";
import clsx from "clsx";

interface Props {
  content: string;
  tabs: string[];
  order?: number;
}

const Tabs = ({ content, tabs, order = 1 }: Props) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const getDisplayOrder = () => {
    const prev = (activeIndex - 1 + tabs.length) % tabs.length;
    const next = (activeIndex + 1) % tabs.length;
    return [tabs[prev], tabs[activeIndex], tabs[next]];
  };

  const getTabIndex = (tab: string) => tabs.indexOf(tab);

  const displayTabs = getDisplayOrder();

  return (
    <div className="w-[665px] flex flex-col items-center gap-12 -ml-60 transition-all duration-500 relative">
      <p
        className="max-w-[210px] text-lg leading-[130%] text-black text-start"
        style={{ order: order }}
      >
        {content}
      </p>

      <div className="flex items-center justify-between gap-16 transition-all duration-500">
        {displayTabs.map((tab, idx) => {
          const isCenter = idx === 1;

          return (
            <p
              key={tab}
              className={clsx(
                "font-jetbrains text-sm tracking-[0.01em] uppercase cursor-pointer transition-all duration-300",
                isCenter
                  ? "text-blue-100 scale-105"
                  : "text-[#ACACACB2] hover:text-black"
              )}
              onClick={() => setActiveIndex(getTabIndex(tab))}
            >
              {tab}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
