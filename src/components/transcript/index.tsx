import Image from "next/image";
import Move from "@/animated/move";
import FiveTabs from "../tabs/five-tabs";
import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Transcript = () => {
  const [progress, setProgress] = useState<number>(0);

  const content = [
    "Delivered as JSON for APIs, SRT for captions, or any custom format you require",
    "Choose real-time at 95% through to human-perfect at 99.9%",
    "Every transcript includes Timestamps, companies, products, topic tags, speakers and more",
    "Built-in MNPI flagging and audit trails for your compliance team",
    "Integrate directly with your cloud storage or API endpoints",
  ];

  return (
    <div className="w-[472px] flex flex-col shrink-0 absolute top-0 right-40">
      <Move className="h-[190px] font-[750] text-[50px] leading-[90%] -tracking-[0.05em] uppercase text-black -ml-12">
        Transcripts that work how you work
      </Move>

      <div className="relative mt-26.5 mb-3">
        <Image
          src="/assets/svg/pointer.svg"
          alt="Process"
          width={50}
          height={190}
          className="object-contain ml-11"
        />

        <div className="absolute -top-[2px] left-[43px] w-[52px] h-[52px]">
          <CircularProgressbar
            value={progress}
            strokeWidth={8}
            styles={buildStyles({
              pathColor: "#0000FF",
              trailColor: "transparent",
            })}
          />
        </div>
      </div>

      <FiveTabs
        content={content}
        tabs={[
          "Flexible Formats",
          "Multiple Accuracy Tiers",
          "Rich Metadata",
          "Compliance-Ready",
          "Instant Delivery",
        ]}
        position="ml-0"
        centered={false}
        setProgress={setProgress}
      />
    </div>
  );
};

export default Transcript;
