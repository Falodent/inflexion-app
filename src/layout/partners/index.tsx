"use client";

import { ScrollFillText } from "@/animated/text";
import HoverCard from "@/components/hover-card";
import clsx from "clsx";
import { useEffect, useState } from "react";

const Partners = () => {
  const [openHover, setOpenHover] = useState(false);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const cardWidth = isMobile ? 262 : 314;
  const cardHeight = 180; // estimated height of the hover card

  const clampPosition = (x: number, y: number) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let newX = x + 10;
    let newY = y + 10;

    if (newX + cardWidth > viewportWidth) {
      newX = viewportWidth - cardWidth - 10;
    }

    if (newY + cardHeight > viewportHeight) {
      newY = viewportHeight - cardHeight - 10;
    }

    return { x: newX, y: newY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const { x, y } = clampPosition(e.clientX, e.clientY);
    setCardPosition({ x, y });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile && openHover) {
        setOpenHover(false);
      }
    };

    if (isMobile && openHover) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openHover, isMobile]);

  return (
    <div className="w-full pt-50 pb-[70px]">
      <div className="w-full flex flex-col px-4 lg:px-7.5 gap-[120px]">
        <div className="w-full max-w-[350px] md:max-w-[1120px] relative">
          <ScrollFillText
            containerClassName="w-full"
            className="pr-2 font-[700] text-2xl leading-[30px] xs:text-[34px] xs:leading-[40px] sm:text-[42px] sm:leading-[52px] lg:text-[62px] lg:leading-[68px] -tracking-[0.03em]"
          >
            <span>
              When your finance audio is INFLXD, transcripts stream securely in{" "}
              {"<"} 1-second and are edited with a dedicated editorial team to{" "}
              <span
                className={clsx(
                  "cursor-pointer transition-all ease-in-out duration-500 border-b-4 border-dashed border-[#BDBDBD] lg:h-[77px]",
                  openHover && "bg-blue-500 text-black rounded-lg"
                )}
                onMouseEnter={() => setOpenHover(true)}
                onMouseLeave={() => setOpenHover(false)}
                onTouchStart={(e) => {
                  const { x, y } = clampPosition(
                    e.touches[0].clientX,
                    e.touches[0].clientY
                  );
                  setCardPosition({ x, y });
                  setOpenHover(true);
                }}
                onMouseMove={handleMouseMove}
              >
                99.9% accuracy{" "}
                <span className="hidden md:inline">within hours</span>
              </span>{" "}
              <span
                className={clsx(
                  "cursor-pointer transition-all ease-in-out duration-500 border-b-4 border-dashed border-[#BDBDBD] md:hidden",
                  openHover && "bg-blue-500 text-black rounded-lg"
                )}
                onMouseEnter={() => setOpenHover(true)}
                onMouseLeave={() => setOpenHover(false)}
                onTouchStart={(e) => {
                  const { x, y } = clampPosition(
                    e.touches[0].clientX,
                    e.touches[0].clientY
                  );
                  setCardPosition({ x, y });
                  setOpenHover(true);
                }}
              >
                within hours
              </span>
              <br />— not days.
            </span>
          </ScrollFillText>

          {openHover && (
            <HoverCard
              isOpen={openHover}
              position={{
                top: cardPosition.y,
                left: cardPosition.x,
              }}
              className="shrink-0 w-[262px] md:w-[314px]"
            >
              <div className="flex flex-col gap-3">
                <p className="font-[700] leading-[24px] text-white">
                  Perfect isn&apos;t optional. It&apos;s delivered.
                </p>

                <p className="font-[500] leading-[24px] text-blue-400 max-w-[270px]">
                  Human-edited transcripts verified by finance-fluent editors
                  who understand the difference between &quot;basis points&quot;
                  and &quot;basic points&quot; — because precision drives alpha.
                </p>
              </div>
            </HoverCard>
          )}
        </div>

        <div className="max-w-[327px] pl-4 lg:pl-0 lg:w-[350px]">
          <p className="text-xl leading-[28px] text-start text-black-100">
            Build transcript libraries as a product and expand your coverage at
            scale without hiring a single editor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
