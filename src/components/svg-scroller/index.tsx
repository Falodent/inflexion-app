"use client";

import Image from "next/image";

interface Props {
  image: string;
  containerHeight?: string;
  imageHeight?: string;
  animation?: string;
}

const AutoScrollSVG = ({
  image,
  containerHeight = "h-[1280px]",
  imageHeight = "h-[1020px]",
  animation = "bigScroll",
}: Props) => {
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
          className={`w-full ${containerHeight} relative aspect-square`}
          style={{
            animation: `${animation} 20s linear forwards`,
            animationDelay: "2s",
          }}
        >
          <Image
            src={`/assets/png/${image}`}
            alt="Auto scrolling SVG"
            fill
            className={`w-full ${imageHeight}`}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AutoScrollSVG;
