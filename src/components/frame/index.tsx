import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  position?: string;
  icon?: React.ReactNode;
  title: string;
  content: string;
  delay: number;
  isHovered?: boolean;
}

const Frame = ({ icon, title, content, delay, isHovered }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay }}
      className={clsx(
        "group relative max-w-[350px] flex flex-col gap-[30px] px-9 py-7 pb-9 border border-black rounded-xl transition-all ease-in-out duration-500 overflow-hidden",
        "hover:max-h-[550px] hover:bg-grey-300 bg-white max-h-[195px]",
        isHovered && "max-h-[550px] bg-grey-300"
      )}
    >
      <Image
        src={`/assets/svg/purpose/${icon}`}
        alt=""
        width={48}
        height={48}
      />

      <div
        className={clsx(
          "transition-all ease-in-out duration-500 flex flex-col gap-20 group-hover:gap-[30px]",
          isHovered && "!gap-[30px]"
        )}
      >
        <h3 className="text-[26px] font-[700] leading-none">{title}</h3>

        <p className="text-xl text-black leading-[28px]">{content}</p>
      </div>
    </motion.div>
  );
};

export default Frame;
