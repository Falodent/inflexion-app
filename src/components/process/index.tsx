import Image from "next/image";
import Tabs from "../tabs";
import Move from "@/animated/move";

const Process = () => {
  return (
    <div className="w-[360px] flex flex-col gap-4.5 shrink-0 absolute top-0 right-30">
      <Move className="h-[190px] font-[800] text-[56px] leading-[90%] -tracking-[0.05em] uppercase text-black">
        We enhance before we process
      </Move>

      <Image
        src="/assets/svg/pointer.svg"
        alt="Process"
        width={50}
        height={190}
        className="object-contain ml-10"
      />

      <Tabs
        content="Background noise removal and volume balancing for crystal-clear input"
        tabs={["Multi-format Support", "Audio Enhancement", "volume balancing"]}
        order={0}
      />
    </div>
  );
};

export default Process;
