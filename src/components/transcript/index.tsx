import Image from "next/image";
import Tabs from "../tabs";
import Move from "@/animated/move";

const Transcript = () => {
  return (
    <div className="w-[472px] flex flex-col  shrink-0 absolute top-0 left-310">
      <Move className="h-[190px] font-[800] text-[56px] leading-[90%] -tracking-[0.05em] uppercase text-black -ml-4">
        Transcripts that work how you work
      </Move>

      <Image
        src="/assets/svg/pointer.svg"
        alt="Process"
        width={50}
        height={190}
        className="object-contain ml-11 mt-18.5 mb-2"
      />

      <Tabs
        content="From 95% real-time to 99.9% human-perfect"
        tabs={["Flexible Formats", "Multiple Accuracy Tiers", "Rich Metadata"]}
      />
    </div>
  );
};

export default Transcript;
