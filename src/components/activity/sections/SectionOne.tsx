import ReactCompareImage from "react-compare-image";
import { motion } from "framer-motion";
import Image from "next/image";

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
        handle={
          <div className="w-[28px] h-[28px] bg-white border border-[#E2DEDE] rounded-full flex items-center justify-center">
            <Image
              src="/assets/svg/tool.svg"
              alt="Tool"
              width={17.5}
              height={17.5}
            />
          </div>
        }
      />
    </motion.div>
  );
};

export default SectionOne;
