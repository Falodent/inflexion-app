import clsx from "clsx";
// import { useState } from "react";
// import ClickAwayListener from "react-click-away-listener";

interface Props {
  item: {
    figure: string;
    title: string;
    content: string;
  };
  isHovered: boolean;
}

const MissionCard = ({ item, isHovered }: Props) => {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleEnter = () => setIsHovered(true);
  // const handleLeave = () => setIsHovered(false);
  return (
    // <ClickAwayListener onClickAway={handleLeave}>
      <div
        className={clsx(
          "group h-[425px] flex flex-col md:border-x border-b border-[#D6DAE0] overflow-y-hidden",
          "pl-4 xs:pl-10 pr-8 pt-15 pb-4 lg:px-2 xx:px-6 xl:pl-10 xl:pr-8",
          "transition-all ease-in-out duration-500",
          isHovered
            ? "bg-black text-white gap-[65px]"
            : "text-[#1E1E1E] gap-[245px]"
        )}
        key={item.figure}
        // onMouseEnter={handleEnter}
        // onMouseLeave={handleLeave}
        // onClick={handleEnter}
        // onTouchEnd={handleLeave}
      >
        <p
          className={clsx(
            "font-jetbrains font-[500] text-xl leading-[120%] -tracking-[0.03em]",
            isHovered ? "text-white" : "text-[#1E1E1E]"
          )}
        >
          {item.figure}
        </p>

        <div
          className={clsx(
            "transition-all ease-in-out duration-500 flex flex-col gap-24 group-hover:gap-[55px]",
            isHovered ? "gap-[32px]" : "gap-24"
          )}
        >
          <h3
            className={clsx(
              "max-w-[305px] text-[26px] font-[700] leading-[120%] -tracking-[0.03em]",
              isHovered ? "text-white" : "text-[#1E1E1E]"
            )}
          >
            {item.title}
          </h3>

          <p
            className={clsx(
              "max-w-[305px] text-xl leading-[32px]",
              isHovered ? "text-white" : "text-[#1E1E1E]"
            )}
          >
            {item.content}
          </p>
        </div>
      </div>
    // </ClickAwayListener>
  );
};

export default MissionCard;
