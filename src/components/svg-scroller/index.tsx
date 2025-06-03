"use client";

import Image from "next/image";

const AutoScrollSVG = ({ image }: { image: string }) => {
  return (
    <div className="h-[350px] w-full flex items-center justify-center rounded-xl border-x-0 border-y border-[#D1D7DE] relative">
      <div
        className="h-[350px] w-full overflow-hidden relative rounded-xl border border-[#D1D7DE]"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div
          className="w-full h-[680px] relative"
          style={{
            animation: "scrollSVG 10s linear forwards",
          }}
        >
          <Image
            src={`/assets/svg/${image}`}
            alt="Auto scrolling SVG"
            fill
            className="w-full h-[680px]"
            objectFit="cover"
          />
        </div>

        <style jsx>{`
          @keyframes scrollSVG {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-300px); /* 680 - 350 = 410 */
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default AutoScrollSVG;
