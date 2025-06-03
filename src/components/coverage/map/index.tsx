import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const CoverageMap = () => {
  const [active, setActive] = useState("Mandarin");

  const language = [
    "Japanese",
    "Hindi",
    "Spanish",
    "French",
    "Mandarin",
    "German",
    "Portuguese",
    "Korean",
  ];

  return (
    <section className="px-30 gap-5 w-full flex items-center">
      <div className="flex flex-col w-[245px]">
        {language.map((item) => (
          <div className="flex items-center gap-6" key={item}>
            <div
              className={clsx(
                "w-2 h-2",
                active === item ? "bg-blue-100" : "bg-transparent"
              )}
            />

            <div
              role="button"
              className={clsx(
                "font-[700] text-[32px] leading-[64px] -tracking-[0.02em]",
                active === item
                  ? "text-black-100"
                  : "text-[#03030333] cursor-pointer"
              )}
              onClick={() => setActive(item)}
            >
              {item}
            </div>
          </div>
        ))}

        <div className="mt-16 ml-8 flex items-center pb-[22px] gap-[11px] text-black border-b-4 border-blue-100 ">
          <p className="font-[700] text-[26px] leading-none -tracking-[0.02em]">
            and much more
          </p>

          <ChevronDown size={24} />
        </div>
      </div>

      <div className="w-full max-w-[900px] h-[557px] relative">
        <Image
          src="/assets/svg/map.svg"
          alt="Map"
          fill
          className="w-full h-[557px] object-cover"
        />

        <div className="absolute"></div>
      </div>
    </section>
  );
};

export default CoverageMap;
