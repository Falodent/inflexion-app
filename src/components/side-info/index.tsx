import clsx from "clsx";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

interface Props {
  show: boolean;
}

const SideInfo = ({ show }: Props) => {
  return (
    <motion.div
      key="left-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
        type: "spring",
      }}
      className={clsx(
        "w-[600px] shrink-0 flex items-start justify-start transition-all ease-in-out duration-500",
        show ? "absolute" : "relative"
      )}
    >
      <motion.div className="flex flex-col items-start gap-12 pt-[140px]">
        <h5 className="font-jetbrains text-[13px] leading-none uppercase tracking-[0.01em] text-blue-300">
          How it works
        </h5>
        <p className="font-[700] text-[48px] leading-[56px] -tracking-[0.03em] text-black-100">
          While others choose between speed or accuracy, our workflow delivers
          both — enabling you to build and monetize transcript libraries at
          unprecedented scale.
        </p>
        <div
          role="button"
          className={clsx(
            "px-5 border border-black rounded-[20px] cursor-pointer transition-all ease-in-out duration-500"
          )}
        >
          <MoveRight size={24} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SideInfo;
