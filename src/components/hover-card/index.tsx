import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  position: React.CSSProperties;
  children: React.ReactNode;
  className?: string;
}

const HoverCard = ({ isOpen, position, children, className }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={clsx("p-5 bg-black absolute rounded-[10px]", className)}
          style={{ ...position, position: "fixed" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HoverCard;
