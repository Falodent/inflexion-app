import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  position: string;
  children: React.ReactNode;
  dropPosition?: string;
  delay: number;
  title: string;
  content: string;
  handleEnter?: () => void;
}

const Info = ({
  position,
  children,
  dropPosition = "-bottom-36",
  delay,
  title,
  content,
  handleEnter,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: delay }}
      viewport={{ once: true }}
      onViewportEnter={handleEnter}
      className={clsx(
        "group absolute w-12 h-12 border-2 bg-white border-black text-black rounded-lg flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300",
        "hover:bg-blue-100 hover:border-blue-100 hover:text-white hover:scale-105",
        position
      )}
    >
      <div className="relative">
        {children}

        <div
          className={clsx(
            "absolute -right-70 w-[250px] bg-black rounded-[10px] py-6 px-[26px]",
            "hidden group-hover:flex flex-col gap-2.5 transition-all ease-in-out duration-500",
            dropPosition
          )}
        >
          <p className="font-[700] leading-[20px] text-white">{title}</p>
          <p className="font-[500] leading-[20px] text-[#8FA6C7]">{content}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Info;
