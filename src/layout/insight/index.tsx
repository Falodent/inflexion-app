import { motion } from "framer-motion";
import InsightCounter from "@/components/stat/insight";

const Insight = () => {
  return (
    <motion.section
      // initial={{ background: "#ffffff" }}
      // whileInView={{ background: "#030303" }}
      // transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-black-100 w-full py-30 px-8 flex flex-col gap-[178px]"
    >
      <div className="max-w-[960px] text-[40px] font-[500] leading-[49px] pr-2 -tracking-[0.03em]">
        <span className="text-fill-white">
          Our transcripts power insights for multi-billion dollar buy-side and
          sell-side institutions, global expert networks, and financial data
          providers serving thousands of investment professionals.
        </span>
      </div>

      <InsightCounter />
    </motion.section>
  );
};

export default Insight;
