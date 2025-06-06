"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  offsetY?: number;
  delay?: number;
  duration?: number;
}

const PageEntrance = ({
  children,
  className,
  offsetY = 200,
  delay = 0.2,
  duration = 0.6,
}: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      });
    }
  }, [inView, controls, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: offsetY, opacity: 0 }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageEntrance;
