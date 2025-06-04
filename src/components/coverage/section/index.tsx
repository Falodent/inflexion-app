import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";

export interface TCoverageSection {
  list: string[];
  image: {
    url: string;
    width: number;
    height: number;
  };
}

const CoverageSection = ({ list, image }: TCoverageSection) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="px-32 w-full flex items-center gap-[188px]"
    >
      <div className="flex flex-col gap-16">
        {list.map((item) => (
          <div className="flex items-center gap-6" key={item}>
            <div className={clsx("w-2 h-2 bg-blue-100")} />

            <p
              role="button"
              className={clsx(
                "font-[500] text-[32px] leading-none -tracking-[0.02em] text-black"
              )}
            >
              {item}
            </p>
          </div>
        ))}
      </div>

      <Image
        src={`/assets/png/coverage/${image.url}`}
        alt="Coverage"
        width={image.width}
        height={image.height}
        className="object-cover"
        loading="eager"
        quality={100}
      />
    </motion.div>
  );
};

export default CoverageSection;
