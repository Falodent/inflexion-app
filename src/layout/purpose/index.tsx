"use client";

import { useState } from "react";
import Button from "@/components/button";
import Frame from "@/components/frame";
import { MoveRight } from "lucide-react";

const Purpose = ({ handleClick }: { handleClick: () => void }) => {
  const data = [
    {
      icon: "purpose1.svg",
      title: "For Earnings Calls",
      content:
        "Investor calls, analyst Q&A, and management commentary captured live. Real-time streaming lets buy-side teams act before the market by feeding models within seconds.",
    },
    {
      icon: "purpose2.svg",
      title: "For Expert Calls",
      content:
        "Conferences, round-tables, and off-stage interviews from industry forums. Near-real-time transcripts surface sentiment shifts and competitive signals while sessions are still in progress.",
    },
    {
      icon: "purpose3.svg",
      title: "For Public Events",
      content:
        "Private consultant calls, insight-library sessions, and specialist forums. Our 99.9% human-edited tier turns the transcript itself into a saleable asset for firms that licence expert content.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center gap-20 relative py-50 pb-40 bg-white">
      <div className="pl-4 lg:pl-0 max-w-[380px] md:max-w-[530px] flex flex-col gap-16">
        <h2 className="font-[720] text-[42px] leading-[48px] xs:text-[48px] xs:leading-[54px] md:text-[62px] md:leading-[64px] -tracking-[0.04em] text-[#0A0A0A] uppercase">
          Purpose-Built for Every Finance Use Case
        </h2>

        <p className="max-w-[395px] text-xl leading-[28px] text-black">
          From public equities earnings calls to expert consultant calls —
          INFLXD transcribes leads the industry in fast and accurate
          transcripts.
        </p>

        <Button className="max-w-[232px]" handleClick={handleClick}>
          <span>BOOK A DEMO</span>
          <MoveRight />
        </Button>
      </div>

      <div className="flex flex-col gap-7 pl-4 pr-2 lg:pl-0">
        {data.map((item, index) => (
          <div
            key={item.icon}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Frame
              content={item.content}
              icon={item.icon}
              title={item.title}
              delay={0.3}
              isHovered={
                hoveredIndex === null ? index === 0 : hoveredIndex === index
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purpose;
