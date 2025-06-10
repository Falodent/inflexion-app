import Image from "next/image";
import Tabs from "../tabs";
import Move from "@/animated/move";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useState } from "react";

const Process = () => {
  const [progress, setProgress] = useState<number>(0);

  const content = [
    "Live streams, conference calls, uploaded files - we handle them all",
    "Background noise removal and volume balancing for crystal-clear input",
    "Bank-grade encryption from the moment audio hits our servers",
    "Automatic identification across 30+ languages, even with mid-conversation switches",
  ];

  return (
    <div className="w-[360px] flex flex-col gap-4.5 shrink-0 absolute top-0 -right-17">
      <Move className="max-w-[280px] md:max-w-full h-[190px] font-[750] text-[32px] md:text-[50px] leading-[90%] -tracking-[0.05em] uppercase text-black">
        We enhance before we process
      </Move>

      <div className="relative">
        <Image
          src="/assets/svg/pointer.svg"
          alt="Process"
          width={50}
          height={190}
          className="object-contain ml-10"
        />

        <div className="absolute -top-[2px] left-[65px] transform -translate-x-1/2 w-[52px] h-[52px]">
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

      <Tabs
        content={content}
        tabs={[
          "Multi-format Support",
          "Audio Enhancement",
          "Secure Pipeline",
          "Language Detection",
        ]}
        order={0}
        setProgress={setProgress}
      />
    </div>
  );
};

export default Process;
