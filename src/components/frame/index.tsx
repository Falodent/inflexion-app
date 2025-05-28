import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  position?: string;
  icon?: React.ReactNode;
  title: string;
  content: string;
  delay: number;
}

const Frame = ({
  position = "-top-18",
  icon,
  title,
  content,
  delay,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay }}
      className={clsx("absolute -right-17.5 w-[190px] h-[210px]", position)}
    >
      <div className="relative w-[190px] h-[210px]">
        <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl bg-black"></div>

        <div className="relative z-10 h-full py-[19px] px-5 rounded-xl border border-black bg-white text-black flex flex-col gap-4">
          {icon}

          <h3 className="text-sm font-[700] leading-none">{title}</h3>

          <p className="text-xs text-black leading-[130%]">{content}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Frame;
