import AutoScrollSVG from "@/components/svg-scroller";
import { motion } from "framer-motion";

const SectionFour = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full h-[350px] flex items-center justify-center relative"
    >
      <AutoScrollSVG image="perfect.png" />
    </motion.div>
  );
};

export default SectionFour;
