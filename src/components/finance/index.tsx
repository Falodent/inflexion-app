import Image from "next/image";
import Tabs from "../tabs";
import Move from "@/animated/move";

const Finance = () => {
  return (
    <div className="w-[545px] flex flex-col shrink-0 absolute top-0 left-20">
      <Move className="h-[190px] font-[800] text-[56px] leading-[90%] -tracking-[0.05em] uppercase text-black -ml-4">
        Finance Editorial Team. Not Generic Transcribers
      </Move>

      <Image
        src="/assets/svg/pointer.svg"
        alt="Process"
        width={50}
        height={190}
        className="object-contain ml-11 mt-18.5 mb-3"
      />

      <Tabs
        content="Only 1% of applicants make the cut. Our editor pool is more selective than Harvard and Y Combinator."
        tabs={[
          "Proprietary Platform",
          "<1% Acceptance Rate",
          "Custom Training Program",
        ]}
      />
    </div>
  );
};

export default Finance;
