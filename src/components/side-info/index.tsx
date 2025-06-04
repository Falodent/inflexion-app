import clsx from "clsx";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const SideInfo = () => {
  return (
    <motion.div
      key="left-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        type: "spring",
      }}
      className={clsx(
        "w-[476px] shrink-0 flex items-start justify-start transition-all ease-in-out duration-500 relative"
      )}
    >
      <motion.div className="h-full flex flex-col items-start justify-between py-[140px]">
        <div className="flex flex-col items-start gap-12">
          <h5 className="font-jetbrains  leading-none uppercase tracking-[0.01em] text-blue-100">
            How it works
          </h5>

          <p className="max-w-[340px] md:max-w-full font-[700] text-[32px] lg:text-[40px] leading-[43px] lg:leading-[49px] -tracking-[0.03em] text-black-100">
            While others choose between speed or accuracy, our workflow delivers
            both — enabling you to build and monetize transcript libraries at
            unprecedented scale.
          </p>
        </div>

        <div
          role="button"
          className={clsx(
            "hidden lg:flex px-5 border border-black rounded-[20px] cursor-pointer transition-all ease-in-out duration-500 mt-auto"
          )}
        >
          <MoveRight size={24} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SideInfo;
