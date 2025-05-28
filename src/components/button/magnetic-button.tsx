"use client";

import clsx from "clsx";
import { useEffect, useRef } from "react";

interface Props {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "scroller";
  size?: "large" | "scroller";
  className?: string;
}

export default function MagneticButton({
  children,
  variant = "primary",
  size = "large",
  className,
}: Props) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const VARIANT = {
    primary:
      "bg-blue-100 text-white outline-none border hover:bg-transparent hover:border-grey-100 hover:text-black",
    secondary:
      "bg-transparent border border-grey-100 text-black hover:bg-blue-100 hover:text-white hover:border-blue-100",
    scroller: "shrink-0 bg-black text-white outline-none !rounded-[40px]",
  };

  const SIZE = {
    large: "h-[62px] py-[19px] pl-[23px] pr-[21px] font-[500]",
    scroller:
      "h-10 px-6 font-[500] font-jetbrains text-[13px] leading-none tracking-[0.01em] uppercase",
  };

  useEffect(() => {
    const button = buttonRef.current!;
    const text = textRef.current!;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;

      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      const magnetRadius = 100;

      if (distance < magnetRadius) {
        const strength = 0.4;
        const moveX = deltaX * strength;
        const moveY = deltaY * strength;

        button.style.transform = `translate(${moveX}px, ${moveY}px)`;
        text.style.transform = `translate(${-moveX * 0.6}px, ${
          -moveY * 0.6
        }px)`;
        button.style.transition = "transform 0.1s ease-out";
        text.style.transition = "transform 0.1s ease-out";
      } else {
        reset();
      }
    };

    const reset = () => {
      button.style.transform = "translate(0, 0)";
      text.style.transform = "translate(0, 0)";
      button.style.transition = "transform 0.3s ease";
      text.style.transition = "transform 0.3s ease";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", reset);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <div
      ref={buttonRef}
      className={clsx(
        "rounded-lg cursor-pointer flex items-center justify-center gap-12 transition-all ease-in-out duration-500 relative overflow-hidden",
        VARIANT[variant],
        SIZE[size],
        className
      )}
    >
      <span ref={textRef} className="relative z-10">
        {children}
      </span>
    </div>
  );
}
