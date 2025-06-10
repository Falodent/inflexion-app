"use client";

import clsx from "clsx";

// types
import { Service } from "@/types/service";

interface Props {
  data: Service;
  isHovered: boolean;
}

const Card = ({ data, isHovered }: Props) => {
  return (
    <div
      className={clsx(
        "group w-full h-[460px] pt-[72px] pb-[66px] pl-5 md:pl-[50px] lg:pl-7 xl:pl-[50px] pr-8 cursor-pointer overflow-hidden",
        data.id !== 2 && "md:border-x-2 border-grey-200",
        isHovered ? "bg-black text-white" : "text-black-100",
        "transition-all ease-in-out duration-500",
        "border-b border-grey-200 lg:border-y-none"
      )}
    >
      <div className="h-full flex flex-col justify-between gap-20 transition-all duration-500 ease-in-out">
        <div
          className={clsx(
            "w-[54px] h-[54px] shrink-0",
            isHovered ? "text-white" : "text-black-100"
          )}
        >
          {data.icon}
        </div>

        <div
          className={clsx(
            "flex flex-col gap-12 transform transition-all ease-in-out duration-700",
            isHovered ? "translate-y-0" : "translate-y-34"
          )}
        >
          <h3
            className={clsx(
              "mt-2 text-2xl xs:text-[32px] lg:text-[26px] xl:text-[32px] font-[700] leading-[120%] transition-all ease-in-out duration-500 max-w-[320px]",
              isHovered ? "text-white" : "text-black-100"
            )}
          >
            {data.title}
          </h3>

          <p
            className={clsx(
              "text-sm xs:text-lg lg:text-xl leading-[29px] lg:leading-[32px] max-w-[322px] lg:max-w-[380px]",
              isHovered ? "text-white" : "text-black-100"
            )}
          >
            {data.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
