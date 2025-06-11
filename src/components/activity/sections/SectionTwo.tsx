import AutoScrollSVG from "@/components/svg-scroller";
import { motion } from "framer-motion";

const SectionTwo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full max-w-[600px] h-[350px] flex items-center justify-center relative"
    >
      <AutoScrollSVG
        image="async.png"
        animation="smallScroll"
        containerHeight="620px"
        imageHeight="620px"
        duration="10s"
      />
    </motion.div>
  );
};

export default SectionTwo;
