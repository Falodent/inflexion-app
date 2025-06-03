import CoverageContent from "@/components/coverage/content";
import CoverageMap from "@/components/coverage/map";
import CoverageTab from "@/components/coverage/tab";
import { CoverageInfo } from "@/content/coverage";
import { useState } from "react";

const Coverage = () => {
  const tabs = [
    "Auto Language Detection",
    "AI + Human Accuracy",
    "Same-Day Delivery",
  ];

  const [active, setActive] = useState("Auto Language Detection");

  return (
    <section className="w-full bg-white pt-32 pb-42 flex flex-col gap-25">
      <div className="ml-32 flex flex-col gap-6 max-w-[675px]">
        <h3 className="font-[750] text-[62px] -tracking-[0.04em] leading-[59px] text-black-100">
          GLOBAL COVERAGE, REAL-TIME
        </h3>

        <p className="font-[500] text-xl leading-[28px] text-[#2A2C2F]">
          Incorporate coverage for global earnings calls, non-English experts,
          and regional insights — all delivered in English.
        </p>
      </div>

      <div className="flex flex-col gap-25">
        <div className="flex flex-col gap-11">
          <p className="ml-32 font-[500] text-xl leading-none -tracking-[0.01em] text-[#999999]">
            What Others Can&apos;t Do:
          </p>

          <CoverageTab tabs={tabs} active={active} setActive={setActive} />
        </div>

        <CoverageContent data={CoverageInfo[active]} />

        <CoverageMap />

        <p className="mt-16 ml-auto mr-9 w-100 font-[500] leading-[130%] -tracking-[0.02em] text-[#9CA3AF] text-end">
          While not native-perfect, our human-enhanced workflow delivers
          industry leading accuracy for financial translations — capturing
          critical numbers, entities, and context.
        </p>
      </div>
    </section>
  );
};

export default Coverage;
