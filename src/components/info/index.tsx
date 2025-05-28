import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  position: string;
  children: React.ReactNode;
  dropPosition?: string;
  delay: number;
}

const Info = ({
  position,
  children,
  dropPosition = "-bottom-36",
  delay,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: delay }}
      className={clsx(
        "group absolute w-12 h-12 border-2 bg-white border-black text-black rounded-lg flex items-center justify-center",
        "hover:bg-blue-100 hover:border-blue-100 hover:text-white",
        position
      )}
    >
      <div className="relative">
        {children}

        <div
          className={clsx(
            "absolute -right-70 w-[250px] h-[150px] bg-black rounded-[10px] py-6 px-7",
            "hidden group-hover:flex flex-col gap-2 transition-all ease-in-out duration-500",
            dropPosition
          )}
        >
          <p className="font-[700] text-sm text-white">
            Clear over clever. Always.
          </p>

          <p className="font-[500] text-xs leading-[20px] -tracking-[0.02em] text-[#8FA6C7]">
            This agent rewrites for flow — breaking up run-ons, cleaning false
            starts, and making sure the final read sounds like people, not
            robots.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Info;
