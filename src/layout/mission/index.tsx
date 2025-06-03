import Button from "@/components/button";
import { MissionData } from "@/content/mission";
import clsx from "clsx";
import { MoveRight } from "lucide-react";

const Mission = () => {
  return (
    <section className="w-full bg-white border-y border-[#D6DAE0] px-8 grid grid-cols-[440px_1fr] justify-between">
      <div className="w-full pt-[70px] flex flex-col gap-10">
        <p className="uppercase font-[750] text-[62px] leading-[90%] text-black -tracking-[0.02em]">
          Is INFLXD. the right fit for you?
        </p>

        <p className="text-xl leading-[28px] text-black-100">
          If any of these statements apply to your organization, let’s talk:
        </p>

        <Button className="max-w-[238px]">
          <span>BOOK A DEMO</span>
          <MoveRight />
        </Button>
      </div>

      <div className="max-w-[810px] w-full grid grid-cols-2 ml-auto">
        {MissionData.map((item) => (
          <div
            className={clsx(
              "h-[425px] pl-10 pr-8 pt-15 pb-4 flex flex-col gap-[134px] border-x border-b border-[#D6DAE0]",
              "hover:bg-black hover:text-white text-[#1E1E1E] transition-all ease-in-out duration-500"
            )}
            key={item.figure}
          >
            <p className="font-jetbrains font-[500] text-xl leading-[120%] -tracking-[0.03em] ">
              {item.figure}
            </p>

            <p className="max-w-[305px] font-[700] text-[26px] leading-[120%] -tracking-[0.03em] ">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
