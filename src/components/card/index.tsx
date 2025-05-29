import clsx from "clsx";
import Image from "next/image";

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
        "hover:bg-grey-300 transition-all ease-in-out duration-700"
      )}
    >
      <div className="h-full flex flex-col justify-between gap-20 transition-all duration-500 ease-in-out">
        <Image
          src={`/assets/svg/service/${data.icon}`}
          alt={data.title}
          width={52}
          height={52}
        />

        <div
          className={clsx(
            "flex flex-col gap-12 transform transition-all ease-in-out duration-700",
            "translate-y-32 group-hover:translate-y-0"
          )}
        >
          <h3
            className={clsx(
              "mt-2 text-[32px] font-[700] leading-[120%] text-black-100 transition-all ease-in-out duration-500"
            )}
          >
            {data.title}
          </h3>

          <p
            className={clsx(
              "text-xl leading-[32px] text-black-400 max-w-[380px]"
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
