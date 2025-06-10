import { motion } from "framer-motion";

const SectionThree = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full h-[350px] flex items-center justify-center relative"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-auto object-cover"
      >
        <source src="/assets/video/draft.mp4" type="video/mp4" />
        <source src="/assets/video/draft.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

export default SectionThree;
