import Activity from "@/components/activity";
import Button from "@/components/button";
import { MoveRight } from "lucide-react";

const Transform = () => {
  return (
    <div className="w-full flex flex-col gap-40 px-9">
      <div className="flex flex-col gap-16">
        <h2 className="max-w-200 text-[63px] leading-[66px] font-[700] -tracking-[0.04em]">
          <span className="text-fill">
            Four ways to transform your audio into actionable data
          </span>
        </h2>

        <Button className="max-w-[292px]">
          <span className="whitespace-nowrap">SCHEDULE YOUR DEMO</span>
          <MoveRight />
        </Button>
      </div>

      <Activity />
    </div>
  );
};

export default Transform;
