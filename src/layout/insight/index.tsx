import InsightCounter from "@/components/stat/insight";
import clsx from "clsx";

const Insight = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <section
      className={clsx(
        "w-full py-30 px-8 flex flex-col gap-[178px] transition-colors duration-700 ease-in-out",
        isVisible ? "bg-black-100 text-white" : "bg-white text-black"
      )}
    >
      <div className="max-w-[960px] text-[40px] font-[500] leading-[49px] pr-2 -tracking-[0.03em]">
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
