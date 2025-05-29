import Image from "next/image";
import Move from "@/animated/move";
import FiveTabs from "../tabs/five-tabs";

const Finance = () => {
  const content = [
    "Style guides applied, figures validated, compliance flags raised",
    "Purpose-built editor with shortcuts that 5X editor productivity",
    "We're more selective than Harvard and Y-Combinator when it comes to vetting editors.",
    "Intensive editorial training and finance terminology bootcamp before first transcript",
    "Editors across industries matched to content",
  ];

  return (
    <div className="w-[545px] flex flex-col shrink-0 absolute top-0 left-[1500px]">
      <Move className="h-[190px] font-[750] text-[50px] leading-[90%] -tracking-[0.05em] uppercase text-black -ml-16">
        Finance Editorial Team. Not Generic Transcribers
      </Move>

      <Image
        src="/assets/svg/pointer.svg"
        alt="Process"
        width={50}
        height={190}
        className="object-contain ml-11 mt-26.5 mb-3"
      />

      <FiveTabs
        content={content}
        tabs={[
          "Multi-Pass Verification",
          "Proprietary Platform",
          "<1% Acceptance Rate",
          "Custom Training Program",
          "Domain Specialization",
        ]}
        position="-ml-65"
      />
    </div>
  );
};

export default Finance;
