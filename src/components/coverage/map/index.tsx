import Translation from "@/components/translation";
import { Translations } from "@/content/translation";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const CoverageMap = () => {
  const [active, setActive] = useState("Mandarin");
  const [showMore, setShowMore] = useState(false);

  const baseLanguages = [
    "Japanese",
    "Hindi",
    "Spanish",
    "French",
    "Mandarin",
    "German",
    "Portuguese",
    "Korean",
  ];

  const moreLanguages = ["Spanish", "French"];

  const language = showMore
    ? [...baseLanguages, ...moreLanguages]
    : baseLanguages;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="lg:px-5 xl:px-30 gap-5 w-full flex flex-col lg:flex-row items-start"
    >
      <div className="px-8 lg:px-0 flex lg:flex-col w-full lg:w-[245px] overflow-x-auto  scrollbar-none gap-5">
        {language.map((item, index) => (
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6" key={`${item}-${index}`}>
            <div
              className={clsx(
                "w-2 h-2 order-3 lg:order-1",
                active === item ? "bg-blue-100" : "bg-transparent"
              )}
            />

            <div
              role="button"
              className={clsx(
                "font-[700] text-2xl leading-[36px] lg:text-[32px] lg:leading-[64px] -tracking-[0.02em] order-2",
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

        <div
          role="button"
          onClick={() => setShowMore((prev) => !prev)}
          className="hidden mt-16 ml-8 lg:flex items-center justify-center pb-[22px] gap-[11px] text-black border-b-4 border-blue-100 cursor-pointer"
        >
          <p className="font-[700] text-[26px] leading-none -tracking-[0.02em] text-center">
            {showMore ? "show less" : "and much more"}
          </p>

          <motion.div
            animate={{ rotate: showMore ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </div>

      <div className="w-full max-w-[900px] h-[557px] relative">
        <Image
          src="/assets/svg/map.svg"
          alt="Map"
          fill
          className="w-full h-[557px] object-cover px-4 lg:px-0"
        />

        <Image
          src={`/assets/svg/country/${Translations[active]?.icon}`}
          alt="Country"
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
