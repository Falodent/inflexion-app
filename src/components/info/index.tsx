import clsx from "clsx";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ClickAwayListener from "react-click-away-listener";

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
  const [showOnClick, setShowOnClick] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // tailwind md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) setShowOnClick((prev) => !prev);
  };

  return (
    <ClickAwayListener onClickAway={() => setShowOnClick(false)}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0, ease: "easeInOut", delay: delay }}
        viewport={{ once: true }}
        onViewportEnter={handleEnter}
        onClick={handleClick}
        className={clsx(
          "group absolute w-12 h-12 border-1 bg-white border-black text-black rounded-lg flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300",
          "hover:bg-blue-100 hover:border-blue-100 hover:text-white hover:scale-105",
          position
        )}
      >
        <div className="relative">
          <div>{children}</div>

          <div
            className={clsx(
              "absolute sm:!-right-70 w-[200px] sm:w-[250px] bg-black rounded-[10px] py-2 sm:py-6 px-4 sm:px-[26px] flex-col gap-2.5 transition-all ease-in-out duration-500",
              dropPosition,
              {
                "hidden group-hover:flex": !isMobile,
                flex: isMobile && showOnClick,
                hidden: isMobile && !showOnClick,
              }
            )}
          >
            <p className="text-sm sm:text-base font-[700] leading-[20px] text-white">
              {title}
            </p>
            <p className="text-sm sm:text-base font-[500] leading-[20px] text-[#8FA6C7]">
              {content}
            </p>
          </div>
        </div>
      </motion.div>
    </ClickAwayListener>
  );
};

export default Info;
