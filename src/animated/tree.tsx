"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Tree() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const move1 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const move2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const move3 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const move4 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const move5 = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const move6 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const move7 = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div ref={containerRef} className="shrink-0">
      <svg
        width="1068"
        height="465"
        viewBox="0 0 1068 465"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.414062 94.8691L168.147 94.8691C177.706 94.8692 186.423 100.335 190.587 108.94L246.096 223.654C248.535 228.696 253.643 231.898 259.243 231.898V231.898"
          stroke="#2A71FA"
          strokeWidth="0.571745"
          strokeDasharray="2.49 2.49"
        />
        <path
          d="M0.625 152.689L108.096 152.689C118.152 152.689 127.224 158.732 131.099 168.012L151.428 216.694C155.303 225.974 164.375 232.017 174.432 232.017L194.393 232.017"
          stroke="#2A71FA"
          strokeWidth="0.571745"
          strokeDasharray="2.49 2.49"
        />
        <path
          d="M461.656 231.9L312.79 231.899C303.287 231.898 294.611 237.302 290.418 245.83L252.059 323.864C247.867 332.393 239.19 337.796 229.687 337.796L0.362573 337.796"
          stroke="#2A71FA"
          strokeWidth="0.571745"
          strokeDasharray="2.49 2.49"
        />
        <path
          d="M0.414062 383.639L135.738 383.639C145 383.639 153.499 378.504 157.806 370.304L247.66 199.28C251.968 191.08 260.466 185.945 269.728 185.945L402.695 185.945C409.702 185.945 416.386 188.894 421.109 194.07L448.214 223.772C452.937 228.948 459.621 231.897 466.628 231.897L646.076 231.897"
          stroke="#2A71FA"
          strokeWidth="0.571745"
          strokeDasharray="2.49 2.49"
        />
        <path
          d="M0.367188 1L223.101 1.00079C233.19 1.00082 242.283 7.08105 246.138 16.4037L328.791 216.287C332.646 225.609 341.739 231.69 351.828 231.69L353.178 231.69"
          stroke="#2A71FA"
          strokeWidth="0.571745"
          strokeDasharray="2.49 2.49"
        />
        <path
          d="M1067.05 231.898L436.39 231.896C426.835 231.896 418.12 237.358 413.955 245.957L316.453 447.236C312.287 455.836 303.573 461.297 294.018 461.297L0.388662 461.297"
          stroke="#2A71FA"
          strokeWidth="0.571745"
          strokeDasharray="2.49 2.49"
        />
        <path
          d="M0 232.061L338.939 232.061"
          stroke="#2A71FA"
          strokeWidth="0.571745"
          strokeDasharray="2.49 2.49"
        />

        {/* Animated Rects */}
        <motion.rect
          x="0"
          y="0"
          width="4.98575"
          height="4.98575"
          fill="black"
          style={{ y: move1 }}
        />
        <motion.rect
          x="0"
          y="57"
          width="4.98575"
          height="4.98575"
          fill="black"
          style={{ y: move2 }}
        />
        <motion.rect
          x="0"
          y="83"
          width="4.98575"
          height="4.98575"
          fill="black"
          style={{ y: move3 }}
        />
        <motion.rect
          x="0"
          y="176"
          width="4.98575"
          height="4.98575"
          fill="black"
          style={{ y: move4 }}
        />
        <motion.rect
          x="0"
          y="264"
          width="4.98575"
          height="4.98575"
          fill="black"
          style={{ y: move5 }}
        />
        <motion.rect
          x="0"
          y="292"
          width="4.98575"
          height="4.98575"
          fill="black"
          style={{ y: move6 }}
        />
        <motion.rect
          x="0"
          y="378"
          width="4.98575"
          height="4.98575"
          fill="black"
          style={{ y: move7 }}
        />
      </svg>
    </div>
  );
}
