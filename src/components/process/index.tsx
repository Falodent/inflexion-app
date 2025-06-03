import Image from "next/image";
import Tabs from "../tabs";
import Move from "@/animated/move";

const Process = () => {
  const content = [
    "Live streams, conference calls, uploaded files - we handle them all",
    "Background noise removal and volume balancing for crystal-clear input",
    "Bank-grade encryption from the moment audio hits our servers",
    "Automatic identification across 30+ languages, even with mid-conversation switches",
  ];

  return (
    <div className="w-[360px] flex flex-col gap-4.5 shrink-0 absolute top-0 -right-17">
      <Move className="h-[190px] font-[750] text-[50px] leading-[90%] -tracking-[0.05em] uppercase text-black">
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
        content={content}
        tabs={[
          "Multi-format Support",
          "Audio Enhancement",
          "Secure Pipeline",
          "Language Detection",
        ]}
        order={0}
      />
    </div>
  );
};

export default Process;
