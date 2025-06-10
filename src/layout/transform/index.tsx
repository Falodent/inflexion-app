import { ScrollFillText } from "@/animated/text";
import Activity from "@/components/activity";
import Button from "@/components/button";
import { MoveRight } from "lucide-react";

const Transform = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="w-full flex flex-col gap-24 pl-5 xl:px-9">
      <div className="flex flex-col gap-16">
        <ScrollFillText
          containerClassName="max-w-[370px] md:max-w-200"
          className="text-[48px] leading-[56px]  md:text-[63px] md:leading-[66px] font-[700] -tracking-[0.04em]"
        >
          <span>Four ways to transform your audio into actionable data</span>
        </ScrollFillText>

        <Button className="max-w-[292px]" handleClick={handleClick}>
          <span className="whitespace-nowrap">SCHEDULE YOUR DEMO</span>
          <MoveRight />
        </Button>
      </div>

      <Activity />
    </div>
  );
};

export default Transform;
