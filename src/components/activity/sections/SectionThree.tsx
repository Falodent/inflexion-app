import { motion } from "framer-motion";
import Image from "next/image";

const SectionThree = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full h-[350px] flex items-center justify-center relative"
    >
      <Image
        src="/assets/png/human.png"
        alt="Human"
        fill
        sizes="100%"
        className="w-full h-full object-contain"
        quality={100}
      />
    </motion.div>
  );
};

export default SectionThree;
