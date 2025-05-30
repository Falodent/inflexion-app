import clsx from "clsx";

// types
import { Service } from "@/types/service";

interface Props {
  data: Service;
}

const Card = ({ data }: Props) => {
  return (
    <div
      className={clsx(
        "group w-full h-[460px] pt-[72px] pb-[66px] pl-[50px] pr-8 cursor-pointer overflow-hidden",
        data.id !== 2 && "border-x-2 border-grey-200",
        "hover:bg-black hover:text-white text-black-100 transition-all ease-in-out duration-700"
      )}
    >
      <div
        className={clsx(
          "h-full flex flex-col justify-between gap-20 transition-all duration-500 ease-in-out"
        )}
      >
        <div className="w-[54px] h-[54px] shrink-0">{data.icon}</div>

        <div
          className={clsx(
            "flex flex-col gap-12 transform transition-all ease-in-out duration-700",
            "translate-y-32 group-hover:translate-y-0"
          )}
        >
          <h3
            className={clsx(
              "mt-2 text-[32px] font-[700] leading-[120%] transition-all ease-in-out duration-500"
            )}
          >
            {data.title}
          </h3>

          <p className={clsx("text-xl leading-[32px] max-w-[380px]")}>
            {data.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
