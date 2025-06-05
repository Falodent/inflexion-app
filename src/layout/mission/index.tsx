import Button from "@/components/button";
import { MissionData } from "@/content/mission";
import clsx from "clsx";
import { MoveRight } from "lucide-react";

const Mission = () => {
  return (
    <section className="w-full bg-white border-y border-[#D6DAE0] grid grid-cols-1 lg:pl-8 lg:grid-cols-[390px_1fr] xl:grid-cols-[440px_1fr] gap-20 lg:gap-5 justify-between">
      <div className="w-full pt-[70px] flex flex-col gap-20 lg:gap-10 pl-8 lg:pl-0">
        <p className="max-w-[330px] md:max-w-full uppercase font-[750] text-[48px] md:text-[62px] lg:text-[56px] leading-[110%] text-black -tracking-[0.02em]">
          Is INFLXD. the right fit for you?
        </p>

        <p className="hidden md:inline text-xl leading-[28px] text-black-100">
          If any of these statements apply to your organization, let’s talk:
        </p>

        <Button className="max-w-[238px]">
          <span>BOOK A DEMO</span>
          <MoveRight />
        </Button>
      </div>

      <div className="max-w-[810px] w-full grid grid-cols-1 md:grid-cols-2 ml-auto">
        {MissionData.map((item) => (
          <div
            className={clsx(
              "group h-[425px]  flex flex-col md:border-x border-b border-[#D6DAE0] overflow-y-hidden",
              "pl-10 pr-8 pt-15 pb-4 lg:px-2 xx:px-6 xl:pl-10 xl:pr-8",
              "hover:bg-black hover:text-white text-[#1E1E1E] transition-all ease-in-out duration-500",
              "hover:gap-[65px] gap-[245px]"
            )}
            key={item.figure}
          >
            <p className="font-jetbrains font-[500] text-xl leading-[120%] -tracking-[0.03em] ">
              {item.figure}
            </p>

            <div
              className={clsx(
                "transition-all ease-in-out duration-500 flex flex-col gap-24 group-hover:gap-[55px]"
              )}
            >
              <h3 className="max-w-[305px] text-[26px] font-[700] leading-[120%] -tracking-[0.03em]">
                {item.title}
              </h3>

              <p className="max-w-[305px] text-xl leading-[32px]">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
