import { ScrollFillText } from "@/animated/text";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.7, ease: "easeInOut" }}
      className="w-full flex flex-col px-2.5 md:pl-7 md:pr-9 md:pb-16 gap-40 lg:gap-20"
    >
      <ScrollFillText
        containerClassName="w-full max-w-[393px] md:max-w-[650px] xx:max-w-[950px] xl:max-w-[1233px] uppercase"
        className="font-[750] text-[43px] xs:text-[48px] leading-[59px] md:text-[80px] md:leading-[89px] xx:text-[120px] xx:leading-[120px] xl:text-[150px] xl:leading-[140px] -tracking-[0.05em] pr-2"
      >
        <span className="pr-4 w-fit">
          we turn finance audio{" "}
          <span className="hidden md:inline-block">&nbsp;</span> into data
        </span>{" "}
        <span className="-ml-6 lg:-ml-8 text-blue-100">.</span>
      </ScrollFillText>

      <div className="ml-auto w-[230px]">
        <p className="text-xl leading-[28px] text-end text-black-100">
          The world&apos;s fastest perfect transcription for finance.
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
