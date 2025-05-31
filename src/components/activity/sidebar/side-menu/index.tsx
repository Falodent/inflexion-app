import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
  content: string;
  ideal: string;
  isActive: boolean;
  handleClick: () => void;
}

const SideMenu = ({
  title,
  subtitle,
  content,
  ideal,
  isActive,
  handleClick,
}: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div
        className={clsx(
          "text-[32px] font-[700] leading-[42px] -tracking-[0.03em] text-[#131313] cursor-pointer",
          isActive && "h-[23px]"
        )}
        role="button"
        onClick={handleClick}
      >
        {title}
      </div>

      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col gap-4"
        >
          <p className="font-jetbrains text-sm leading-[32px] text-[#00000099]">
            {subtitle}
          </p>

          <p className="max-w-[450px] font-[500] text-xl leading-[28px] text-[#131313]">
            {content}
          </p>

          <p className="italic font-[700] leading-[28px] text-[#131313]">
            Ideal for: <span className="font-[400] italic">{ideal}</span>
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default SideMenu;
