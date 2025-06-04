import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.7, ease: "easeInOut" }}
      className="w-full flex flex-col px-2.5 md:pl-7 md:pr-9 md:pb-16 gap-40 lg:gap-20"
    >
      <h1 className="w-full max-w-[393px] lg:max-w-[1233px] uppercase font-[750] text-[52px] leading-[59px] lg:text-[150px] lg:leading-[140px] -tracking-[0.05em]">
        <span className="text-fill pr-4 w-fit">
          we turn finance audio <span className="hidden lg:inline-block">&nbsp;</span> into data
        </span>{" "}
        <span className="-ml-6 lg:-ml-8 text-blue-100">.</span>
      </h1>

      <div className="ml-auto w-[230px]">
        <p className="text-xl leading-[28px] text-end text-black-100">
          The world&apos;s fastest perfect transcription for finance.
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
