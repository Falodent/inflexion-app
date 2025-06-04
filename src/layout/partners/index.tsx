import HoverCard from "@/components/hover-card";
import clsx from "clsx";
import { useState } from "react";

const Partners = () => {
  const [openHover, setOpenHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="w-full pt-50 pb-[70px]">
      <div className="w-full flex flex-col px-4 lg:px-7.5 gap-[120px]">
        <div className="w-full max-w-[350px] lg:max-w-[1120px] relative">
          <span className="text-fill pr-2 font-[700] text-[42px] leading-[52px] lg:text-[62px] lg:leading-[68px] -tracking-[0.03em]">
            When your finance audio is INFLXD, transcripts stream securely in{" "}
            {"<"} 1-second and are edited with a dedicated editorial team to{" "}
            <span
              className={clsx(
                "cursor-pointer transition-all ease-in-out duration-500 border-b-4 border-dashed border-[#BDBDBD] inline-block lg:h-[77px]",
                openHover && "bg-blue-500 text-black rounded-lg"
              )}
              onMouseEnter={() => setOpenHover(true)}
              onMouseLeave={() => setOpenHover(false)}
              onMouseMove={handleMouseMove}
            >
              99.9% accuracy{" "}
              <span className="hidden lg:inline-block">within hours</span>
            </span>{" "}
            <span
              className={clsx(
                "cursor-pointer transition-all ease-in-out duration-500 border-b-4 border-dashed border-[#BDBDBD] inline-block lg:hidden",
                openHover && "bg-blue-500 text-black rounded-lg"
              )}
              onMouseEnter={() => setOpenHover(true)}
              onMouseLeave={() => setOpenHover(false)}
              onMouseMove={handleMouseMove}
            >
              within hours
            </span>
            <br />— not days.
          </span>

          {openHover && (
            <HoverCard
              isOpen={openHover}
              position={{
                top: mousePosition.y + 10,
                left: mousePosition.x + 10,
              }}
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
