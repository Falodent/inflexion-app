import Button from "@/components/button";
import MissionCard from "@/components/card/mission";
import { MissionData } from "@/content/mission";
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
          <MissionCard item={item} key={item.figure} />
        ))}
      </div>
    </section>
  );
};

export default Mission;
