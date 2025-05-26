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
        "group w-full pt-20 pb-30 pl-[77px] pr-15 cursor-pointer",
        data.id === 2 && "border-x-2 border-grey-200"
      )}
    >
      <div className="group-hover:scale-110 flex flex-col gap-12 transition-all duration-500 ease-in-out">
        <Image
          src={`/assets/svg/${data.icon}`}
          alt={data.title}
          width={76}
          height={76}
        />

        <h3 className="mt-2 text-[32px] font-[700] leading-[120%] text-black-100">
          {data.title}
        </h3>

        <p
          className={clsx(
            "text-xl leading-[32px] text-black-400",
            data.id === 1 ? "max-w-[330px]" : "max-w-[350px]"
          )}
        >
          {data.text}
        </p>
      </div>
    </div>
  );
};

export default Card;
