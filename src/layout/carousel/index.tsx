"use client";

import HoverCard from "@/components/hover-card";
import { CarouselOne, CarouselTwo } from "@/content/carousel";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface Active {
  title: string;
  content: string;
}

const Carousel = () => {
  const [openHover, setOpenHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [details, setDetails] = useState<Active | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setOpenHover(false);
      setDetails(null);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (item: Active) => {
    setDetails(item);
    setOpenHover(true);
  };

  const handleMouseLeave = () => {
    setOpenHover(false);
    setDetails(null);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="w-full py-8 sm:py-20 flex flex-col gap-5 sm:gap-7 bg-white">
      {/* Carousel One */}
      <div
        className="relative w-full h-10 sm:h-14 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-10 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-10 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="absolute left-0 top-0 flex carousel w-max gap-2 sm:gap-6 overflow-auto">
          {CarouselOne.map((item, index) => (
            <div
              key={index}
              className={clsx(
                "element relative w-fit px-3 sm:px-[30px] h-9 sm:h-[50px] border border-[#030303] text-black-100 rounded-full shrink-0 select-none flex items-center justify-center",
                "hover:bg-blue-100 hover:border-blue-100 hover:text-white transition-all ease-in-out duration-500"
              )}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <p className="font-jetbrains font-[500] text-xs sm:text-base tracking-[0.02em] uppercase">
                {item.short}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Two */}
      <div
        className="relative w-full overflow-hidden h-10 sm:h-14"
        onMouseMove={handleMouseMove}
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-10 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-10 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="absolute left-0 top-0 flex carousel-reverse w-max gap-2 sm:gap-6">
          {CarouselTwo.map((item, index) => (
            <div
              key={index}
              className={clsx(
                "element relative w-fit px-3 sm:px-[30px] h-9 sm:h-[50px] border border-[#030303] text-black-100 rounded-full shrink-0 select-none flex items-center justify-center",
                "hover:bg-blue-100 hover:border-blue-100 hover:text-white transition-all ease-in-out duration-500"
              )}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <p className="font-jetbrains font-[500] text-xs sm:text-base tracking-[0.02em] uppercase">
                {item.short}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* HoverCard */}
      {openHover && details && (
        <HoverCard
          isOpen={openHover}
          position={{
            top: mousePosition.y + 10,
            left: mousePosition.x + 10,
          }}
          className="w-[170px] sm:w-[256px] z-20"
        >
          <div className="flex flex-col gap-1 sm:gap-2 bg-black-100 text-white shrink-0 pl-1 pt-1 rounded-[10px]">
            <p className="text-xs sm:text-sm font-[700] leading-none">{details?.title}</p>
            <p className="font-[500] text-[#8FA6C7] text-[11px] sm:text-sm leading-[16px] sm:leading-[20px] -tracking-[0.02em]">
              {details?.content}
            </p>
          </div>
        </HoverCard>
      )}
    </section>
  );
};

export default Carousel;
