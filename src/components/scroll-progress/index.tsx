import { motion } from "framer-motion";
import clsx from "clsx";

interface Props {
  progress: number;
}

const ScrollProgress = ({ progress }: Props) => {
  const currentSection = Math.min(4, Math.max(1, Math.ceil(progress * 4)));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-24 left-0 z-[200] h-[calc(100vh-6.5rem)] w-6 flex items-center"
    >
      <div className="relative w-2 h-full bg-transparent overflow-hidden">
        <div
          className="absolute left-0 top-0 w-full bg-blue-100 transition-all ease-in-out duration-0"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      <div className="absolute top-0 left-2.5 w-6 h-full flex flex-col justify-between items-center py-1 pointer-events-none">
        {["01", "02", "03", "04"].map((num) => (
          <div
            key={num}
            className={clsx(
              Number(num) === currentSection
                ? "text-sm font-jetbrains tracking-[0.01em] text-blue-100"
                : "text-white"
            )}
          >
            {num}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ScrollProgress;
