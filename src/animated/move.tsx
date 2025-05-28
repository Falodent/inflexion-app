import { motion } from "framer-motion";

interface Props {
  className?: string;
  children: React.ReactNode;
  delay?: number
}

const Move = ({ className, children, delay = 0.7 }: Props) => {
  return (
    <motion.div
      initial={{ x: 100 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1, delay: delay, type: "spring" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Move;
