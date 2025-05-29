import ReactCompareImage from "react-compare-image";
import { motion } from "framer-motion";

const SectionOne = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full h-[350px]"
    >
      <ReactCompareImage
        rightImage="/assets/png/before.png"
        leftImage="/assets/png/after.png"
        sliderLineColor="#0000FF"
        sliderLineWidth={4}
      />
    </motion.div>
  );
};

export default SectionOne;
