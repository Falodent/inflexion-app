import { useIsMobile } from "@/helpers/useIsMobile";
import { motion } from "framer-motion";

interface Props {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

const Move = ({ className, children, delay = 0.7 }: Props) => {
  const isMobile = useIsMobile(620);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        delay: isMobile ? 0.2 : delay,
        type: "spring",
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Move;
