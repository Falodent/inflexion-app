import HoverCard from "@/components/hover-card";
import { CarouselOne, CarouselTwo } from "@/content/carousel";
import clsx from "clsx";
import { useState } from "react";

interface Active {
  title: string;
  content: string;
}

const Carousel = () => {
  const [openHover, setOpenHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // details
  const [details, setDetails] = useState<Active | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="w-full py-20 flex flex-col gap-7 bg-white">
      <div
        className="relative w-full h-14 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10 bg-gradient-to-r from-white to-transparent" />

        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="absolute left-0 top-0 flex carousel w-max gap-6 overflow-auto">
          {CarouselOne.map((item, index) => (
            <div
              key={index}
              className={clsx(
                "element relative w-fit px-[30px] h-[50px] border-[1.5px] text-black-100 border-[#030303] rounded-[136px] shrink-0 select-none flex items-center justify-center",
                "hover:bg-blue-100 hover:border-blue-100 hover:text-white transition-all ease-in-out duration-500"
              )}
              onMouseEnter={() => {
                setDetails({
                  title: item.title,
                  content: item.content,
                });
                setOpenHover(true);
              }}
              onMouseLeave={() => {
                setOpenHover(false);
                setDetails(null);
              }}
            >
              <p className="font-jetbrains font-[500] text-base tracking-[0.02em] uppercase">
                {item.short}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden h-14"
        onMouseMove={handleMouseMove}
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10 bg-gradient-to-r from-white to-transparent" />

        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="absolute left-0 top-0 flex carousel-reverse w-max gap-6">
          {CarouselTwo.map((item, index) => (
            <div
              key={index}
              className={clsx(
                "element relative w-fit px-[30px] h-[50px] text-black-100 border-[1.5px] border-[#030303] rounded-[136px] shrink-0 select-none flex items-center justify-center",
                "hover:bg-blue-100 hover:border-blue-100 hover:text-white transition-all ease-in-out duration-500"
              )}
              onMouseEnter={() => {
                setDetails({
                  title: item.title,
                  content: item.content,
                });
                setOpenHover(true);
              }}
              onMouseLeave={() => {
                setOpenHover(false);
                setDetails(null);
              }}
            >
              <p className="font-jetbrains font-[500] text-base tracking-[0.02em] uppercase">
                {item.short}
              </p>
            </div>
          ))}
        </div>
      </div>

      {openHover && details && (
        <HoverCard
          isOpen={openHover}
          position={{
            top: mousePosition.y + 10,
            left: mousePosition.x + 10,
          }}
          className="w-[256px] z-20"
        >
          <div
            className={clsx(
              "flex flex-col gap-2 bg-black-100 text-white",
              "shrink-0 pl-1 pt-1 rounded-[10px]"
            )}
          >
            <p className="text-sm font-[700] leading-none">{details?.title}</p>
            <p className="font-[500] text-[#8FA6C7] leading-[20px] -tracking-[0.02em]">
              {details?.content}
            </p>
          </div>
        </HoverCard>
      )}
    </section>
  );
};

export default Carousel;
