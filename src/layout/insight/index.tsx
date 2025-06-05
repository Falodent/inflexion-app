import InsightCounter from "@/components/stat/insight";
import clsx from "clsx";

const Insight = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <section
      className={clsx(
        "w-full py-20 xs:py-30 px-4 xs:px-8 pr-0 lg:pr-8 flex flex-col gap-[178px] transition-colors duration-700 ease-in-out",
        isVisible ? "bg-black-100 text-white" : "bg-white text-black"
      )}
    >
      <div className="max-w-[350px] md:max-w-[960px] text-[32px] md:text-[40px] font-[500] leading-[44px] md:leading-[49px] pr-2 -tracking-[0.03em]">
        <span>
          Our transcripts power insights for multi-billion dollar buy-side and
          sell-side institutions, global expert networks, and financial data
          providers serving thousands of investment professionals.
        </span>
      </div>

      <InsightCounter />
    </section>
  );
};

export default Insight;
