"use client";

import Translation from "@/components/translation";
import { Translations } from "@/content/translation";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const CoverageMap = () => {
  const [active, setActive] = useState("Mandarin");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const languages = [
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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="lg:px-5 xl:px-30 gap-5 w-full flex flex-col lg:flex-row items-start"
    >
      {/* Mobile dropdown */}
      <div className="w-full h-16 px-4 lg:hidden relative z-20">
        <div
          className={clsx(
            "w-[90%] absolute top-0 border rounded-md border-black flex flex-col overflow-hidden transition-all duration-500 ease-in-out",
            dropdownOpen
              ? "max-h-[1000px] bg-white"
              : "max-h-[61px] bg-transparent"
          )}
        >
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="w-full p-4 flex justify-between items-center cursor-pointer"
          >
            <div className="flex items-center gap-4 text-lg font-[700] leading-none text-black-100">
              <div className="w-2 h-2 bg-blue-100" />
              {active}
            </div>

            <div
              className={clsx(
                dropdownOpen ? "rotate-180" : "",
                "transition-all ease-in-out duration-500"
              )}
            >
              <ChevronDown size={24} />
            </div>
          </button>

          <div className="w-full flex flex-col gap-1">
            {languages
              .filter((lang) => lang !== active)
              .map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setDropdownOpen(false);
                    setActive(option);
                  }}
                  className="max-w-full p-4 pl-10 text-lg font-[700] leading-none text-black-100 cursor-pointer text-start"
                >
                  {option}
                </button>
              ))}
          </div>
        </div>
      </div>

      {/* Desktop language list */}
      <div className="px-8 lg:px-0 hidden lg:flex lg:flex-col w-full lg:w-[245px] overflow-x-auto scrollbar-none gap-5">
        {languages.map((item, index) => (
          <div
            className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6"
            key={`${item}-${index}`}
          >
            <div
              className={clsx(
                "w-2 h-2 order-3 lg:order-1",
                active === item ? "bg-blue-100" : "bg-transparent"
              )}
            />
            <div
              role="button"
              className={clsx(
                "font-[700] text-base leading-[20px] xs:text-2xl xs:leading-[36px] lg:text-[32px] lg:leading-[54px] xx:text-[28px] xx:leading-[46px] xl:text-[32px] xl:leading-[54px] -tracking-[0.02em] order-2",
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

        <div className="hidden mt-8 ml-8 w-fit lg:flex items-center justify-start pb-[22px] gap-[11px] text-black border-b-4 border-blue-100 cursor-pointer">
          <p
            className={clsx(
              "font-[700] text-xl xl:text-[26px] leading-none -tracking-[0.02em] text-start"
            )}
          >
            and much more
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="w-full max-w-[900px] h-[420px] md:h-[557px] relative">
        <Image
          src="/assets/png/map.png"
          alt="Map"
          fill
          className="w-full h-[420px] md:h-[557px] object-cover px-4 lg:px-0"
        />
        <Image
          src={`/assets/svg/country/${Translations[active]?.icon}`}
          alt={active}
          width={37}
          height={28}
          className={`absolute ${Translations[active]?.coordinates}`}
          loading="eager"
        />
        <Translation text={Translations[active]?.text} />
      </div>
    </motion.section>
  );
};

export default CoverageMap;
